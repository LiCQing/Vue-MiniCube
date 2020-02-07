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
						
						<ContectItem v-for="(item,key) in recent_contacts" :item="item" :key="key" />
						
						 
						<li class="chat-group">
							<div class="author-thumb">
								<img src="static/img/avatar11-sm.jpg" alt="author">
								<img src="static/img/avatar12-sm.jpg" alt="author">
								<img src="static/img/avatar13-sm.jpg" alt="author">
								<img src="static/img/avatar10-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
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
						</li>
					</ul>
					
					<!-- ... end Notification List Chat Messages -->
		
					
			
					
		
				</div>
		
				<div class="col col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 padding-l-0">
			
					<ChatField v-if="now_friend?true:false" />
				
					<div v-else style="height: 526px;border-left: 1px solid #e6ecf5;"> 请选择联系人	 </div>
						
					
					
				</div>
			</div>
		
		</div>
		
		
		<!-- Pagination -->
		
		
	</div>
</template>

<script>
	
	import ContectItem from "../ChatMessage/ContectItem"
	import ChatField from "../ChatMessage/ChatField"
	import {mapGetters} from 'vuex'
	export default {
		computed:{
			...mapGetters(['field_msg','recent_contacts','now_friend'])
		},
		components:{
			ContectItem,ChatField
		}
	}
	
</script>

<style>
</style>
