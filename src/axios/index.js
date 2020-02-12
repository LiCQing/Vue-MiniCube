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
			//store.commit("set_refresh_token",data.refresh_token)
			store.commit("set_me",data.user)
			store.dispatch('conect_msg_server',{'uri':"localhost:9658/chat/imserver/identify"}) //连接聊天服务
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
	addFriend(id){
		var url ="/friend/add/"+id
		return service.get(url).then((res)=>{
				 if(res.data.success){
					 successMsg("请求成功，请静候佳音")
				 }else{
					 errorMsg(res.data.message)
				 }
			})
	},
	//获取好友请求
	getFriendRequest(){
		var url ="/friend/request"
		return service.get(url).then((res)=>{
				console.log(res)
			})
	},
	//确认好友通过
	acceptRequest(id){
		var url ="/friend/accept/"+id
		return service.get(url).then((res)=>{
				console.log(res)
			})
	},
	//拒绝好友申请
	refuseRequest(id){
		var url ="/friend/refuse/"+id
		return service.get(url).then((res)=>{
				console.log(res)
			})
	},
	
	//---------------微博相关
	//获得好友的微博
	getBlogListOfFriend(){
		return service.get("/blog/list/friend")
	},
	//发送微博
	publish_blog(blog){
		service.post("/blog/insert",blog).then()
	},
	
	//
	async uploadhead(data){
		await service.post("/oauth/user/head",data,{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then((res)=>{
			  console.log(res)
		}).catch(e=>{
			 console.error(e)
		})
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