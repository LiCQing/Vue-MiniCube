<template>
	<!-- Chat Field -->
	
	<div class="chat-field">
		<div class="ui-block-title">
			<h6 class="title">{{nowfriend.nick||nowfriend.username}}</h6>
			<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
		</div>
		<div class="" data-mcs-theme="dark">
			<ul ref="box" class="notification-list chat-message chat-message-field scoll-y" >
				<li class="align-center">
					查看历史消息
				</li>
				<li v-for="(msg_item,i) in fieldmsg">
					<!-- 时间 -->
					<span class="notification-date" style="text-align: center;width: 100%;"> 
						<time class="entry-date updated" datetime="2004-07-24T18:18">{{pubtime(msg_item.time)}}</time>
					</span> 
					<!-- 头像 -->
					<div class="author-thumb">
						<img :src="msg_item.sender.cover.indexOf('http') != -1?msg_item.sender.cover: (util.VAR().imgurl + msg_item.sender.cover)" alt="author" class="avatar">
					</div>
					<!-- 内容 -->
					<div class="notification-event">
						<span :class="msg_item.sender.id == me.id ? 'my-message': 'other-message'" class="chat-message-item" v-html="msg_item.msg"> </span>
					</div>
				</li>
	
			<!-- 	<li>
					<div class="notification-event"> -->
						<!-- <a href="#" class="h6 notification-friend">James Spiegel</a> -->
						
					<!-- 	<span v-html="msg" class="chat-message-item my-message">
							你好
						</span>
						<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:30pm</time></span>
						 --><!-- <div class="added-photos">
							<img src="static/img/photo-message1.jpg" alt="photo">
							<img src="static/img/photo-message2.jpg" alt="photo">
							<span class="photos-name">icons.jpeg; bunny.jpeg</span>
						</div> -->
				<!-- 	</div>
					
					<div class="author-thumb">
						<img src="static/img/author-page.jpg" alt="author">
					</div>
				</li> -->
	
		
			</ul>
		</div>
	
		<MessageForm/>
	
	</div>
	
	<!-- ... end Chat Field -->
</template>

<script>
	import MessageForm from './MessageForm'
	import {mapGetters} from 'vuex'
	import PubSub from 'pubsub-js'
	
	export default {
		props: ['fieldmsg','nowfriend'],
		components : {
			MessageForm
		},
		data(){
			return {
				msg:' Hi Elaine! I have a question, do you think that tomorrow we could talk to  <img  src="static/img/icon-chat3.png" alt="icon">'
			}
		},
		methods: {
			pubtime(time){
				return this.util.getTimeOfSpace(time)
			}
		},
		computed:{
			...mapGetters(['now_friend','field_msg','me']),
		
		},
		updated(){
			var ul = this.$refs.box
			ul.scrollTop = ul.scrollHeight;
			
			
			
			/* PubSub.subscribe("msgbox-buttom",()=>{
				setTimeout(()=>{
				   ul.scrollTop = ul.scrollHeight;
				},1)
			}) */
		},
		mounted(){
			var ul = this.$refs.box
			ul.scrollTop = ul.scrollHeight;
			
			//修改高度
			PubSub.subscribe("msgbox-buttom",()=>{
				setTimeout(()=>{
				   ul.scrollTop = ul.scrollHeight;
				},1)
			})
		}
	}
	
</script>

<style scope>
	
	.chat-message-field li{
		padding:10px
	}
	
	.other-message{
		padding:10px;
		border-radius:10px;
		background:#f0f4f9;
		color: #000;
	}
	
	.my-message{
		padding:10px;
		border-radius:10px;
		background:rgba(64,141,255,.85);
		color:#fff
	}
	
	.scoll-y{
		height: 503px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style>
