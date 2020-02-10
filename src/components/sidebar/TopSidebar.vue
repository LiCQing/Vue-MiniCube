<template>
	<!-- Header-BP -->
	
	<header class="header" id="site-header">
	
		<div class="page-title">
			<h6>MiniCube</h6>
		</div>
	
		<div class="header-content-wrapper">
			<form class="search-bar" > <!-- w-search notification-list friend-requests"> -->
				<div class="form-group with-button">
					<input class="form-control" v-model="keyword" placeholder="搜索……" type="text">
					<button @click="search">
						<svg class="olymp-magnifying-glass-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
					</button>
				</div>
			</form>
	
			<!-- <a href="#" class="link-find-friend">查找朋友</a> -->
	
			<div class="control-block">
	
				<div class="control-icon more has-items">
					<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					<div class="label-avatar bg-blue">6</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">好友申请</h6>
							<a href="#">查找好友</a>
							<router-link to="/profile/setting">设置</router-link>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list friend-requests">
								
								<FriendRequestItem v-for="(request,key) in friend_request" :request="request" :key = "key" :i="key"/>
								
								<li>
									<div class="author-thumb">
										<img src="static/img/avatar55-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
										<span class="chat-message-item">共同好友: Sarah、Hetfield</span>
									</div>
									<span class="notification-icon">
										<a   href="#" class="accept-request">
											<span class="icon-add without-text">
												<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>
	
										<a   href="#" class="accept-request request-del">
											<span class="icon-minus">
												<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>
	
									</span>
									<div   class="more">
										<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
									</div>
								</li>
 
	
								<li class="accepted">
									<div class="author-thumb">
										<img src="static/img/avatar57-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										你和 <a href="#" class="h6 notification-friend">Mary Jane Stark</a> 已经好朋友了. Write on <a href="#" class="notification-link">her wall</a>.
									</div>
									<span class="notification-icon">
										<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
									</span>
	
									<div class="more">
										<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
										<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
									</div>
								</li>
								<li class="accepted">
									<div class="author-thumb">
										<img src="static/img/avatar57-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										你拒绝了 <a href="#" class="h6 notification-friend">Mary Jane Stark</a> 的好友请求
									</div>
									<span class="notification-icon">
										<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
									</span>
	
									<div class="more">
										<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
										<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
									</div>
								</li>
							
	
							</ul>
						</div>
	
						<router-link to="/profile/request"  class="view-all bg-blue">查看所有消息</router-link>
					</div>
				</div>
	
				<div class="control-icon more has-items">
					<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
					<div class="label-avatar bg-purple">2</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">消息</h6>
							<a href="#">标记所有已读</a>
							<a href="#">设置</a>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list chat-message">
								<!-- <ContectItem/> -->
	
	
								<li class="chat-group">
									<div class="author-thumb">
										<img src="static/img/avatar11-sm.jpg" alt="author">
										<img src="static/img/avatar12-sm.jpg" alt="author">
										<img src="static/img/avatar13-sm.jpg" alt="author">
										<img src="static/img/avatar10-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<a href="#" class="h6 notification-friend">相亲相爱一家人</a>
										<span class="last-message-author">XX:</span>
										<span class="chat-message-item">震惊，一小伙子插了一晚上，第二天……</span>
										<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">7月21 10:23</time></span>
									</div>
										<span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
									<div class="more">
										<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
									</div>
								</li>
							</ul>
						</div>
	
						<router-link to="/profile/chat" class="view-all bg-purple">查看所有消息</router-link>
					</div>
				</div>
	
				<div class="control-icon more has-items">
					<svg class="olymp-thunder-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
	
					<div class="label-avatar bg-primary">8</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">通知</h6>
							<a href="#">标记所有已读</a>
							<a href="#">设置</a>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list">
								<NoticeItem/>
							</ul>
						</div>
	
						<router-link to="/profile/notification" class="view-all bg-primary">查看所有通知</router-link>
					</div>
				</div>
	
				<div class="author-page author vcard inline-items more">
					<div class="author-thumb">
						<img alt="author" :src="me.cover" class="avatar">
						<span class="icon-status online"></span>
						<div class="more-dropdown more-with-triangle">
							<div class="mCustomScrollbar" data-mcs-theme="dark">
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">黎</h6>
								</div>
	
								<ul class="account-settings">
									<li>
										<router-link to='/profile'>
											<svg class="olymp-menu-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
											<span>个人设置</span>
										</router-link>
									</li>
									<li>
										<a href="36-FavPage-SettingsAndCreatePopup.html">
											<svg class="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
	
											<span>Create Fav Page</span>
										</a>
									</li>
									<li>
										<a href="#">
											<svg class="olymp-logout-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>
	
											<span>安全退出</span>
										</a>
									</li>
								</ul>
	
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">聊天设置</h6>
								</div>
	
								<ul class="chat-settings">
									<li>
										<a href="#">
											<span class="icon-status online"></span>
											<span>撩我</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="icon-status away"></span>
											<span>辣你去物管啊</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="icon-status disconected"></span>
											<span>给爷爬</span>
										</a>
									</li>
	
									<li>
										<a href="#">
											<span class="icon-status status-invisible"></span>
											<span>看不见我看不见我</span>
										</a>
									</li>
								</ul>
	
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">Custom Status</h6>
								</div>
	
								<form class="form-group with-button custom-status">
									<input class="form-control" placeholder="" type="text" value="Space Cowboy">
	
									<button class="bg-purple">
										<svg class="olymp-check-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-check-icon"></use></svg>
									</button>
								</form>
	
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">About Olympus</h6>
								</div>
	
								<ul>
									<li>
										<a href="#">
											<span>Terms and Conditions</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>FAQs</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Careers</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Contact</span>
										</a>
									</li>
								</ul>
							</div>
	
						</div>
					</div>
					<router-link to="/profile" class="author-name fn">
						<div class="author-title">
							{{me.username}} <svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
						</div>
						<span class="author-subtitle">{{me.desc?me.desc:"什么也没有留下"}}</span>
					</router-link>
				</div>
	
			</div>
		</div>
	</header>
	
	<!-- ... end Header-BP -->
	
</template>

<script>
	import FriendRequestItem from '../Friend/FriendRequestItem'
	import ContectItem from '../ChatMessage/ContectItem'
	import NoticeItem from '../Notification/NoticeItem'

	 
	import {mapGetters} from 'vuex'
	 import PubSub from 'pubsub-js' 
	
	export default {
		data(){
			return {
				keyword:""
			}
		},
	  components: {
	     FriendRequestItem,ContectItem,NoticeItem
	  },
		computed: {
			...mapGetters(['me','token','friend_request'])
		},
		methods: {
			search() {
			/* 	if(this.keyword == ""){
					return 
				} */
				if(this.$router.currentRoute.path != "/result")
					this.$router.push("/result")
				PubSub.publish("search",this.keyword)
				//console.log(router)
			}
		},
		mounted: function(){
			$('.selectpicker').selectpicker();
			$.material.init();
		}
	}
</script>

<style>
</style>
