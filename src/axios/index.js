import {service} from './request.js'
import axios from 'axios'
import store from '@/store'
import common from '@/common'


function errorMsg(msg){
	common.alertErrorMsg(msg)
}

function successMsg(msg){
	common.alertSuccessMsg(msg)
}

export default {
	getMsgApi(id){
		var msgList = {};
		service.get("/msg/getmsglist/"+id).then((res)=>{
			msgList =  formatUnReadMsg(res.data);
			store.commit("set_field_msg",msgList)
		})
		return msgList;
	},
	//登陆
	login(user){
		//console.log(user)
		service.post("/oauth/token?username="+user['name']+"&password="+user['pwd']+"&grant_type=password").then((res)=>{
			
			var data = res.data;
			if(data.success){//登陆成功
			store.commit("set_token",data.access_token)
			store.commit("set_refresh_token",data.refresh_token)
			store.commit("set_me",data.user)
			store.dispatch('conect_msg_server') //连接聊天服务
			successMsg("登陆成功，即将跳转")
			setTimeout(()=>{	
				store.dispatch("toindex")
			},1000) 
			
			}else{
				//console.log(res.data)
				errorMsg(data.data)
				//alert(data.data)
			}
		})
	},
	//注册
	register(user){
		//console.log(user)
		service.post("/sign",user).then((res)=>{
			
			var data = res.data;
			if(data.success){//注册成功
		/* 	store.commit("set_token",data.access_token)
			store.commit("set_refresh_token",data.refresh_token)
			store.commit("set_me",data.user)
			store.dispatch('conect_msg_server',{'uri':"localhost:9658/chat/imserver/identify"}) //连接聊天服务 */
			successMsg("注册成功")
			setTimeout(()=>{	
				//store.dispatch("toindex")
			},2000) 
			
			}else{
				//console.log(res.data)
				errorMsg(data.data)
				//alert(data.data)
			}
		})
	},
	//检查是否重复
	check(value){  
		var url ="/sign/check/"+value
		return service.get(url);
	},
	//搜索用户和微博
	search(value){
		var url ="/friend/search/"+value
		return service.get(url);
	},
	//添加用户
	addFriend(param){
		return service.post("/friend/add/",param).then((res)=>{
				 if(res.data.success){
					 successMsg("请求成功，请静候佳音")
				 }else{
					 errorMsg(res.data.message)
				 }
			})
	},
	//获取好友请求
	getFriendRequest(){
		return service.get("/friend/request").then((res)=>{
				 if(res.data.success){
				 	  store.commit("set_friend_request",res.data.data);
				 }else{
				 	errorMsg(res.data.message)
				 }
			})
	},
	getFriendList(){
		return service.get("/friend/list").then((res)=>{
				if(res.data.success){
						store.commit("set_friend_list",res.data.data);
				}else{
					errorMsg(res.data.message)
				}
			})
	},
	//确认好友通过
	acceptRequest(param){
		return service.post("/friend/accept",param).then((res)=>{
				console.log(res)
			})
	},
	//拒绝好友申请
	refuseRequest(id){
		return service.post("/friend/refuse").then((res)=>{
				console.log(res)
			})
	},
	
	
	//---------------微博相关
	searchBlog(key){
		return service.get("/blog/search/"+key)
	},
	
	//获得好友的微博
	getBlogListOfFriend(page){
		return service.post("/blog/list/friend",page)
	},
	async getBlogOfId(id){
		let data =  await service.get("/blog/get/"+id)
		return data
	},
	//发送微博
	 publish_blog(blog){
		return service.post("/blog/insert",blog) //返回插入的微博
	},
	del_blog(id){
		return service.delete("/blog/delete/"+id)
	},
	//点赞
	async likeBlog(bid){
		  let data = await service.put("/blog/operate/like/"+bid)
			return data
	},
	async islike(bid){
			let data = await service.get("/blog/operate/islike/"+bid)
			return data
	},
	//取消点赞
	async unlikeBlog(bid){
		let data = await service.put("/blog/operate/unlike/"+bid)
		return data
	},
	//转发
	repeat(blog){
		 service.post("/blog/insert",blog).then((res=>{
		 	successMsg("转发成功")
		 }))
	},
	//评论
	sendComment(comment){
		return service.post("/blog/comment/reply",comment)
	},
	async getCommentbyBid(bid){
		 let res = await service.get("/blog/comment/list/" + bid);
		 return res.data
	},
	//删除评论
	delComment(id){
		return service.post("/blog/comment/delete/" + id);
	},
	
	
	//上传文件
	async uploadFile(param){
		var res =  await service.post("/blog/file/add",param,{
					headers: { 'Content-Type': 'multipart/form-data' }}) 
		//返回地址
		//console.log(code,data)
		return res
	},
	
	//----------------个人信息
	//const { code, data } = await service.post('/oauth/token?grant_type=refresh_token&refresh_token='+refreshToken);
  uploadhead(param){
		/* const { code, data } = await axios.post("http://localhost:8634/oauth/user/head/update",param,{ headers: {
						'Content-Type': 'multipart/form-data'
					}}) */
			service.post("/user/info/head",param,{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then(res=>{
					successMsg("修改成功");
					store.commit("set_cover",res.data.data)
				})
		
		
	},
	
	async update_info(user){
		const { code, data } = await service.put("/user/info/update",user)
		console.log(data)
		if(data.success){ 
			store.commit("set_me",data.data)
			successMsg("修改成功");
		}
	},
	
	async check_pwd(user){
		const {code,data} = await service.post("/sign/check/pwd",user)
		if(code == 200) return data
		return {}
	},
	
	//获取某人信息
	async getUserInfo(id){
 
		 const {code,data} = await service.get("/user/"+id)
		 return data
	}
	
}

//消息处理
var formatUnReadMsg = function(data){
	var msgList = data.map((msg) =>{
	 var sender = getFriend(msg.fromId)
	 msg['sender'] = sender
	 msg['time'] = dateLong2String(msg['time'])
	 //console.log(msg)
	 return msg	
	})
	return msgList
	//console.log(msgList)
} 


//朋友函数
var getFriend = function(id){
	var friendList = store.state.friend_list
	var friend = null
	friendList.forEach((f)=>{
		if(f.id == id){
			friend = f;
			return ;
		}
	})
	return friend == null ? {id:id,name:"未知联系人",cover:"/static/img/avatar3-sm.jpg"} : friend
	
}

//时间函数
var dateLong2String = function(time){
       var date = new Date(time);
       var year = date.getFullYear();
       var month = date.getMonth()+1;
       var day = date.getDate();
       month = month < 10 ? "0"+month:month;
       day = day < 10 ? "0"+day:day;
       return year+"-"+month+"-"+day;
			
}

var CurrentTime = function() {
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth();//得到月份
        var date = now.getDate();//得到日期
        var day = now.getDay();//得到周几
        var hour = now.getHours();//得到小时
        var minu = now.getMinutes();//得到分钟
        var sec = now.getSeconds();//得到秒
　　     var MS = now.getMilliseconds();//获取毫秒
        var week;
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        if (MS < 100) MS = "0" + MS;
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        week = arr_week[day];
        var time = "";
		time = year +"-"+month + "-" +date + " " + hour +":" + minu + ":" + sec
		return time;
        //time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
        //当前日期赋值给当前日期输入框中（jQuery easyUI）
        //$("#currentDate").html(time);
        //设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
        //var timer = setTimeout("writeCurrentDate()", 1000);
      }