import Vue from 'vue';
import Vuex from 'vuex';
import request from "../axios/index.js";
import route from '../router/index.js' 
import { Message } from 'element-ui'

Vue.use(Vuex);

 
let this_store = this
let vue_route = route


const store = new Vuex.Store({
    state: {  // 初始化数据，只要有可能的用到的最好都初始化
		basic_auth: "Basic Y2xpZW50XzI6NjY2",
		token: "",
		refresh_token:"",
		//聊天的条数
		field_msg:[],
		//最近联系用户
		recent_contacts:[],
		websock: null,
		me:{
			id:1001,
			username:"游客",
			cover:'static/img/author-page.jpg'
		},
		//好友
		now_friend:null,
		friend_request:[
			{username:"wuwu",cover:"/static/img/avatar3-sm.jpg",fid:1}
		],
		friend_list:[
			{id:4,username:"张三",cover:"/static/img/avatar8-sm.jpg"},
			{id:7,username:"小米",cover:"/static/img/avatar2-sm.jpg"},
			{id:8,username:"君越",cover:"/static/img/avatar16-sm.jpg"},
			{id:9,username:"大伟",cover:"/static/img/avatar3-sm.jpg"},
			{id:1001,username:'bob',cover:"static/img/author-page.jpg"},
			{id:404,username:"未知联系人",cover:"/static/img/avatar3-sm.jpg"}
		],
		
		
    },
    mutations: {
        set_websoket (state, obj) {  // store中的数据只能通过commit mutation来改变
            state.websock = obj
        },
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
			state.token = "Bearer " + obj 
		},
		set_refresh_token(state,obj){
			state.refresh_token = obj
		},
		set_me(state,obj){
			//obj.cover ='static/img/author-page.jpg'
			state.me = obj
		},
		set_friend_request(state,obj){
			state.friend_request = obj
		},
		remove_friend_req(state,index){
			state.friend_request.splice(index,1)
		}
		
    },
	//获取方法
	getters:{
		websock:function(state){
			return state.websock
		},
		field_msg:function(state){
			return state.field_msg
		},
		recent_contacts:function(state){
			return state.recent_contacts
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
			console.log("登陆成功")
			if(vue_route.currentRoute.query.redirect){
				vue_route.push(vue_route.currentRoute.query.redirect)
			}else{
				vue_route.push("/index")
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
		
		//登陆
		login(context,user){
			request.login(user)
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
		
		//  websocketl连接方法 
		conect_msg_server(context, obj){
			window.WebSocket = window.WebSocket || window.MozWebSocket;
			if (!window.WebSocket) { // 检测浏览器支持  			
				console.error('错误: 浏览器不支持websocket');
				return;
			}
			//协议
			const protocol = (window.location.protocol == 'http:') ? 'ws://' : 'wss://';
			//身份信息
			const arg = '?Authorization=' +  encodeURI(context.state.token) + '&transport=websocket'
			//接口地址url
			const url = protocol + obj["uri"]+arg
			console.log(url);
			//连接
			var websock = new WebSocket(url);
			websock.onopen = websocketonopen
			websock.onmessage = websocketonmessage
			websock.onerror = websocketonerror
			websock.onclose = websocketclose
			context.commit('set_websoket', websock)
		},
		send_msg(context,msg){
			msg['time']=CurrentTime()
			//console.log(context)
			//补充个人信息                    
			msg['fromId']=context.getters.my_id
			msg['toId']=context.getters.now_friend.id
			var websock = context.state.websock
			if(websock == null){
				errorMsg("聊天服务器连接异常，请重新登录重试")
				return 
			}
			var sendContent = JSON.stringify(msg)
			websock.send(sendContent);
			
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

var websocketonopen = function () {
		//console.log(this.websock)
		//this.$store.dispatch('saveForm',{'sock':this.websock});
        console.log("WebSocket连接成功");
   }
	  
var websocketonerror = function (e) {
		 errorMsg("WebSocket连接发生错误")
 }
	  
var websocketonmessage = function (e) {
      var da = JSON.parse(e.data);
	  console.log("收到消息如下:",da)
	  da = formatUnReadMsg(da)
	  console.log("当前store如下")
	  //this_store = this_store.a
		if(da.length > 0)
			this_store.a.state.recent_contacts = da
	  
	  console.log(this_store)
	  console.log("当前route如下")
	  console.log(route)
	  var path = vue_route.currentRoute.fullPath
	  if(path.endsWith("chat")){
		   var field_msg = this_store.a.state.field_msg 
		   if(field_msg.length ==0 ){
			   console.log("未选择联系人")
			   //加入到未读消息里面
		   }else{
			   var isme = false
			   field_msg.forEach((i,msg) =>{
				   if(msg.sender.id == msg.fromId){
					   isme = true
				   }
			   })
			   if(isme){
				   console.log("当前窗口是发送人")
				   //加入到field聊天窗口
			   }else{
				   //加入到未读消息
				   console.log("当前聊天的人不是我")
			   }
		   }
		   
	  }else{
		  console.log("未打开聊天页面");
		  //直接加入未读
		  
	  }
        //this.msg_data.unshift(da);
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
      console.log("connection closed ()" + e);
	}

//朋友函数
var getFriend = function(id){
	//console.log(this_store)
	var friendList = this_store.a.state.friend_list
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

export default store;