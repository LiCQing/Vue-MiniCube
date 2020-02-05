<template>
	<!-- Chat Field -->
	
	<div class="chat-field">
		<div class="ui-block-title">
			<h6 class="title">{{now_friend.name}}</h6>
			<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
		</div>
		<div class="" data-mcs-theme="dark">
			<ul ref="box" class="notification-list chat-message chat-message-field scoll-y" >
				<li class="align-center">
					查看历史消息
				</li>
				<li v-for="msg_item,i in field_msg">
					<span v-if="field_msg[field_msg.length - i -1].time != ''" class="notification-date" style="text-align: center;width: 100%;"> 
						<time class="entry-date updated" datetime="2004-07-24T18:18">{{field_msg[field_msg.length - i -1].time}}</time>
					</span> 
					<div class="author-thumb">
						<img :src="field_msg[field_msg.length - i -1].sender.cover" alt="author">
					</div>
					<div class="notification-event">
						<span :class="field_msg[field_msg.length - i -1].sender.id == my_id ? 'my-message': 'other-message'" class="chat-message-item" v-html="field_msg[field_msg.length - i -1].msg"> </span>
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
		components : {
			MessageForm
		},
		data(){
			return {
				msg:' Hi Elaine! I have a question, do you think that tomorrow we could talk to  <img  src="static/img/icon-chat3.png" alt="icon">'
			}
		},
		computed:{
			...mapGetters(['now_friend','field_msg','my_id'])
		},
		updated(){
			var ul = this.$refs.box
			ul.scrollTop = ul.scrollHeight;
			
			PubSub.subscribe("msgbox-buttom",()=>{
				setTimeout(()=>{
				   ul.scrollTop = ul.scrollHeight;
				},1)
			})
		},
		mounted(){
			var ul = this.$refs.box
			ul.scrollTop = ul.scrollHeight;
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
		background:#336bec;
		color:#fff
	}
	
	.scoll-y{
		height: 503px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style>
