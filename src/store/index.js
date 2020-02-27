import Vue from 'vue';
import Vuex from 'vuex';
import request from "../axios/index.js";
import common from '../common'
import route from '../router/index.js' 
import { Message } from 'element-ui'


Vue.use(Vuex);

 
let this_store = this
let vue_route = route


const store = new Vuex.Store({
    state: {  // 初始化数据，只要有可能的用到的最好都初始化
		basic_auth: "Basic Y2xpZW50XzI6NjY2",
		
		token: common.getInfoFromLocal("token") || "",
		//refresh_token: common.getInfoFromLocal("refresh_token") || "",
		//聊天的条数
		field_msg:[],
		//最近联系用户
		recent_contacts:[],
		websock: null,
		me:common.getInfoFromLocal2Json("myinfo") || {
			id:1001,
			username:"游客",
			cover:'static/img/author-page.jpg'
		},
		//好友
		now_friend:null,
		friend_request:[
			/* {username:"wuwu",cover:"/static/img/avatar3-sm.jpg",fid:1} */
		],
		friend_list:[],
		
		
    },
		
		
  mutations: {
		set_field_msg(state,obj){
			state.field_msg = obj
		},
		add_field_msg(state,obj){
			state.field_msg.unshift(obj)
		},
		set_now_friend(state,obj){
			state.now_friend = obj
		},
		set_token(state,obj){
			var token = "Bearer " + obj 
			common.setInfoToLoca("token",token)
			state.token = token
		},
		set_refresh_token(state,obj){
			common.setInfoToLoca("refresh_token",obj)
			state.refresh_token = obj
		},
		set_me(state,obj){
			//obj.cover ='static/img/author-page.jpg'
			common.setJsonInfoToLoca("myinfo",obj)
			state.me = obj
		},
		clear_login_info(state,obj){
			common.removeInfoFromLocal("token")
			common.removeInfoFromLocal("myinfo")
			common.removeInfoFromLocal("refresh_token")
			state.token = ""
			state.refresh_token = ""
			state.me = {}
		},
		set_friend_request(state,obj){
			state.friend_request = obj
		},
		remove_friend_req(state,index){
			state.friend_request.splice(index,1)
		},
		set_friend_list(state,list){
			state.friend_list = list
		},
		set_cover(state,url){
			state.me.cover = url
			common.setJsonInfoToLoca("myinfo",obj)
		},
		set_recent_contacts(state,list){
			state.recent_contacts = list
			common.setJsonInfoToLoca("recent_contacts",obj)
		},
		add_recent_contacts(state,obj){ //添加一条未读消息
			//判断是否已存在
			var rc =  state.recent_contacts
			var olditem;
			for(var i = 0 ; i < rc.length ;i++){
				 if(rc[i].friend.id  == obj.friend.id){
					  olditem = state.recent_contacts[i];
						state.recent_contacts.splice(i,1);
				 }
			}
			if(!olditem){olditem = obj }
			else{
				 obj.noreadcount = olditem.noreadcount + 1
				 olditem = obj
			}
			state.recent_contacts.unshift(olditem)
			common.setJsonInfoToLoca("recent_contacts",state.recent_contacts)
		},
		clear_recents(state){
			state.recent_contacts = []
		}
		
    },
	//获取方法
	getters:{
		websock:function(state){
			return window.mySocket
		},
		websock_states:function(state){
			return window.mySocket.readyState == 0 || window.mySocket.readyState == 1
		},
		field_msg:function(state){
			return state.field_msg
		},
		recent_contacts:function(state){
			 return state.recent_contacts || common.getInfoFromLocal2Json("recent_contacts")
		},
		friend_list:function(state){
			return state.friend_list
		},
		now_friend:function(state){
			return state.now_friend
		},
		token:function(state){
			return state.token
		},
		me:function(state){
			return state.me
		},
		basic_auth:function(state){
			return state.basic_auth;
		},
		friend_request:function(state){
			return state.friend_request;
		}
	},
	
	//方法
    actions: {
		//页面跳转
		toindex(content){
			console.log("登陆成功" , route)
			
			
		/* 	request.getRequestList().then(res=>{
				
			})
			 */
			if(route.currentRoute.query.redirect){
				route.push(route.currentRoute.query.redirect)
			}else{
				route.push("/index")
			}
			//
		},
		
		
		//获取消息
		getFieldMsgApi(context,id){
			console.log("查看聊天信息：",id)
			//var msgList=[]
			request.getMsgApi(id)
			//console.log(x)
			var friend = getFriend(id)
			context.commit("set_now_friend",friend)
			//context.commit("set_field_msg",msgList)
		},
		clear_recents(context){
			context.commit("clear_recents")
		},
		//登陆
		login(context,user){
			request.login(user)
		},
		//退出
		logout(context){
			context.commit("clear_login_info")
			successMsg("退出成功")
			setTimeout(()=>{	
				vue_route.push("/login")
			},1000) 
		},
		//注册
		register(context,user){
			request.register(user)
		},
		check(context,value){
			return request.check(value);
		},
		//好友处理
		removeRequest(context,value){
			 context.commit("remove_friend_req",value)
		},
		//--------------微博相关
	
		
		//  websocketl连接方法 
		conect_msg_server(context){
			window.mySocket = websocketConnect(context.state.token)
		},
		send_msg(context,msg){
			msg['time']=CurrentTime()
			//console.log(context)
			//补充个人信息                    
			msg['fromId']=context.getters.my_id
			msg['toId']=context.getters.now_friend.id
			
			if(window.mySocket == null || window.mySocket.readyState != 1){
				 window.mySocket = websocketConnect(context.state.token)
			}
			var sendContent = JSON.stringify(msg)	
			window.mySocket.send(sendContent);
			
			msg['sender'] = context.state.me
			var newMsg =Object.assign({}, msg);
			context.commit("add_field_msg",newMsg)
			
		}
    }
})


var errorMsg = function(msg){
	Message({ message:msg,  type: 'error', duration: 3 * 1000, showClose: true, offset:300, center:true })
}

var successMsg = function(msg){
	Message({ message:msg,  type: 'success', duration: 3 * 1000, showClose: true, offset:300, center:true })
}

//websoket 事件方法

var websocketConnect = function(token){
		window.WebSocket = window.WebSocket || window.MozWebSocket;
		if (!window.WebSocket) { // 检测浏览器支持  			
			console.error('错误: 浏览器不支持websocket');
			return;
		}
		//协议
		const protocol = (window.location.protocol == 'http:') ? 'ws://' : 'wss://';
		//身份信息
		const arg = '?Authorization=' +  encodeURI(token) + '&transport=websocket'
		//接口地址url
		const url = protocol + '106.13.49.70:9658/chat/imserver/identify'+arg
		//console.log(url);
		//连接
		var websock = new WebSocket(url);
		websock.onopen = websocketonopen
		websock.onmessage = websocketonmessage
		websock.onerror = websocketonerror
		websock.onclose = websocketclose
		return websock
}


var websocketonopen = function () {
		//console.log(this.websock)
		//this.$store.dispatch('saveForm',{'sock':this.websock});
        console.log("WebSocket连接成功");
				window.mySocket.send("")
   }
	  
var websocketonerror = function (e) {
		 errorMsg("WebSocket连接发生错误")
 }
	  
var websocketonmessage = function (e) {
		console.log("收到消息如下:", e.data)
		
    var data = JSON.parse(e.data);

	/*  da = formatUnReadMsg(da)
	  console.log("当前store如下")
	  //this_store = this_store.a
		if(da.length > 0)
			this_store.a.state.recent_contacts = da 
	  console.log(this_store)
	  console.log("当前route如下")
	  console.log(route)*/
		
	  var path = route.currentRoute.fullPath 
		
		
		//把消息完整的传过去
		
	  if(path.endsWith("chat")){ //打开了聊天界面，交给聊天组件处理
			 			 PubSub.publish("re-msg",data)
	  }else{  //console.log("未打开聊天页面");
		  //直接加入未读 
			//开启通知
			//successMsg(data.msg)
			let user = getFriend(data.fromId)
			var contect = {friend:user,msg:data.msg,sendTime:data.time,noreadcount:1}
      store.commit("add_recent_contacts",contect)
	  }
      
	}

var toUnRead = function(data){
	
}

var formatUnReadMsg = function(data){
	var msgList = data.map((msg) =>{
	 var sender = getFriend(msg.fromId)
	 msg['sender'] = sender
	 //console.log(msg)
	 return msg	
	})
	return msgList
	//console.log(msgList)
} 

var websocketclose =  function (e) {
      console.log("websocket 连接关闭");
			console.log(e)
	}

//朋友函数
var getFriend = function(id){
	if(id == -10){
		return {id:id,nick:"server",cover:"/static/img/badge7.png"}
	}
	//console.log(this_store)
	var friendList = store.state.friend_list
	var friend = null
	friendList.forEach((f)=>{
		if(f.id == id){
			friend = f;
			return f;
		}
	})
	return friend == null ? {id:id,nick:"未知联系人",cover:"/static/img/avatar3-sm.jpg"} : friend
	
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

export default store;