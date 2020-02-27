<template>
	<div>
		<div class="ui-block">
			<div class="ui-block-title">
				<h6 class="title">聊天/消息</h6>
				<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
			</div>
			<div class="row">
				<div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 padding-r-0">
			
					<!-- Notification List Chat Messages -->
					
					<ul class="notification-list chat-message" style="height: 700px;overflow-y: scroll;">
						
						<ContectItem v-for="(item,key) in contact_list" :item="item" :key="key" :index="key" @chooseItem="changeItem" @delItem="delItem"/>
 
						<!-- <li class="chat-group">
							<div class="author-thumb">
								<img src="static/img/avatar11-sm.jpg" alt="author">
								<img src="static/img/avatar12-sm.jpg" alt="author">
								<img src="static/img/avatar13-sm.jpg" alt="author">
								<img src="static/img/avatar10-sm.jpg" alt="author">
							</div>
							<div  class="notification-event">
								<a href="#" class="h6 notification-friend">You, Faye, Ed & Jet +3</a>
								<span class="last-message-author">Ed:</span>
								<span class="chat-message-item">Yeah! Seems fine by me!</span>
								<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March 16th at 10:23am</time></span>
							</div>
							<span class="notification-icon">
														<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
													</span>
							<div class="more">
								<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
							</div>
						</li> -->
					</ul>
					
					<!-- ... end Notification List Chat Messages -->	
				</div>
				<div class="col col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 padding-l-0">		
					<ChatField v-if="contact_index>=0"  :fieldmsg="fieldMsg" :nowfriend="contact_list[contact_index].friend" />
					<div v-else style="height: 526px;border-left: 1px solid #e6ecf5;"> 请选择联系人	 </div>
				</div>
			</div>
		
		</div>

	</div>
</template>

<script>
	import ContectItem from "../ChatMessage/ContectItem"
	import ChatField from "../ChatMessage/ChatField"
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {
				contact_list: [], //本地聊天列表
				fieldMsg:[],//聊天字段
				contact_index:-1, //当前聊天的人位置
			}
		},
		computed:{
			//recent_contects:最近联系的列表
			...mapGetters(['me','recent_contacts','now_friend','friend_list'])
		},
		components:{
			ContectItem,ChatField
		},
		methods: {
			...mapActions(['conect_msg_server','clear_recents']),
			changeItem(index){ //接收到index
				//this.fieldMsg=[]
				//从本地获取记录
				this.fieldMsg = this.util.getChatHistory(this.contact_list[index].friend.id)
				this.contact_index = index //修改当前的显示人
				
				this.contact_list[index].noreadcount = 0
				//console.log(index)
				this.saveToLocal()
			},
			
			delItem(index){
				this.contact_list.splice(index,1)
				this.saveToLocal()
			},
			
			saveToLocal(list){
				 this.util.setJsonInfoToLoca("contact_list", this.contact_list)
			}
		},
		mounted(){
			//读取本地聊天记录
			this.contact_list = this.util.getInfoFromLocal2Json("contact_list") || []
			//合并最近的聊天记录
			if(this.contact_list.length == 0){this.contact_list = this.recent_contacts }
			else{
				//有用相同的联系人留下recent的，没有的就加在本地之前
				 for(var j =0 ; j < this.recent_contacts.length ;i++){
					let r = this.recent_contacts[i]
				   for(var i = 0 ; i < this.contact_list.length ; i++){ //遍历本地列表看有不有重复
					    let c = this.contact_list[j] 
						if(r.friend.id == c.friend.id){ //相同的情况，移除本地的，添加最新的在local
							 this.contact_list.splice(i,1)
							 this.contact_list.unshift(r)
							 break;	
						}
				   }//没有相同的
				   this.contact_list.unshift(r)
				 }
				//this.util.setJsonInfoToLoca("contact_list", this.contact_list)
				this.clear_recents()
				this.util.removeInfoFromLocal("recent_contacts") //把最近的通知已经阅读了
				this.saveToLocal()
			}
			//console.log(this.contact_list)
			
			//绑定和某人聊天事件
			PubSub.subscribe("chat-with-friend",(msg,index)=>{
				var user = this.friend_list[index]
				var contect = {friend:user,msg:"",sendTime:""}

				//console.log(this.recent_contacts)
				for(var i = 0 ; i < this.contact_list.length ; i++){ //遍历聊天列表
					if(!this.contact_list[i].msg){  //把空消息去除 
						this.contact_list.splice(i,1)
						continue;
					}
					if(this.contact_list[i].friend.id == user.id){ //把原来有的换上去
					    contect = this.contact_list[i]
					    this.contact_list.splice(i,1)
					}
				}
				this.contact_list.unshift(contect) //添加最新的
				this.contact_index = 0
				this.$store.state.now_friend =  user
				//切换聊天字段
				this.fieldMsg = [] //获取消息，或者使用缓存
			})
			
			//发送消息
			PubSub.subscribe("send-msg",(msg,sendMsg)=>{ //发送消息
				console.log(this.contact_index)
				var item = this.contact_list[this.contact_index];
				
				item.msg = sendMsg ; //把内容添加到最近聊天
				item.sendTime = new Date().getTime(); //发送时间
				let user = this.contact_list[this.contact_index].friend; //获取发送人
				//切换位置
				this.contact_list.splice(this.contact_index,1)
				this.contact_list.unshift(item)
				var param = {
					toId:user.id,
					msg:sendMsg,
					time:new Date().getTime(),
					fromId:this.me.id
				}
				//调用发送接口
				console.log(JSON.stringify(param))
				window.mySocket.send(JSON.stringify(param))
				//把我发送的消息，添加到那记录表
				var field = this.util.objectClone(param);
				field.sender = this.util.toSender(this.me)
				this.fieldMsg.push(field)
				//保存更新到本地
				//this.util.setJsonInfoToLoca("contact_list", this.contact_list)
				this.util.saveChatHistory(user.id,field) //保存到本地
				this.saveToLocal()
			})
			
			//接收消息
			PubSub.subscribe("re-msg",(msg,data)=>{ //接收消息
				if(data.fromId == -10){console.log("heart ",data); return;}//心跳消息
				
				console.log(data)
				var  user = {}
				this.friend_list.forEach(friend =>{
						if(friend.id ==data.fromId){ user = friend; }
				})
				let sender = this.util.toSender(user) //转一下仅仅留需要个属性
				//补充消息的属性
				data.sender = sender
				
				let index = this.contact_index;
				var nowitem
				if(index > -1)  nowitem = this.contact_list[index];//获取当前点的用户
					
				if(nowitem && nowitem.friend.id == data.fromId){ //如果是当前用户（打开了和当前人对话的窗口）,直接修改item 再加入聊天框
						this.fieldMsg.push(data)
						nowitem.msg = data.msg
						nowitem.sendTime = data.time
				}else{ //不是当前用户，查找本地聊天列表是否有，如无则新增，有则修改
					for(var i = 0 ; i < this.contact_list.length ; i++){ //遍历聊天列表
						if(this.contact_list[i].friend.id == data.fromId){ //把原来有的换上去
							var contect = this.contact_list[i]
							this.contact_list.splice(i,1) //去掉之前的
							contect.msg = data.msg
							contect.sendTime = data.time
							contect.noreadcount = (contect.noreadcount||0) + 1 //未读消息+1
							this.contact_list.unshift(contect)
							this.util.saveChatHistory(data.fromId,data) 
							this.saveToLocal()
							return ;
						}
						
					}//找不到，是新的。。
					
					var contect = {friend:user,msg:data.msg,sendTime:data.time,noreadcount:1}
					this.contact_list.unshift(contect)
				}
				this.util.saveChatHistory(data.fromId,data) 
				this.saveToLocal()
			})
			
			
		}
		
	}
	
</script>

<style>
</style>
