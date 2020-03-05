<template>
	<!-- Header-BP -->
	
	<header class="header" id="site-header">
	
		<router-link to="/index" class="page-title">
			<h6>MiniCube</h6>
		</router-link>
	
		<div class="header-content-wrapper">
			<form  autocomplete="off" @submit.prevent="" class="search-bar" > <!-- w-search notification-list friend-requests"> -->
				<div class="form-group with-button">
					<!-- <input @keyup.enter.stop.prevent="search" class="form-control" v-model="keyword" placeholder="搜索……" type="text"> -->
					<input  class="form-control" v-model="keyword" placeholder="搜索……" type="text">
					<button @click.stop="search">
						<svg class="olymp-magnifying-glass-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
					</button>
				</div>
			</form>
	
			<!-- <a href="#" class="link-find-friend">查找朋友</a> -->
	
			<div class="control-block">
	
				<div class="control-icon more has-items">
					<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					<div v-show="friend_request.length" class="label-avatar bg-blue">{{friend_request.length}}</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">好友申请</h6>
							<a href="#">查找好友</a>
							<router-link to="/profile/setting">设置</router-link>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list friend-requests">
								
								<div v-if="!friend_request.length">暂无</div>
								
								<FriendRequestItem v-for="(request,key) in friend_request" :request="request" :ispage="false" :key = "key" :i="key"/>
	
							</ul>
						</div>
	
						<router-link to="/profile/request"  class="view-all bg-blue">查看所有消息</router-link>
					</div>
				</div>
	
				<div class="control-icon more has-items">
					<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
					<div v-if="allnoreadcount" class="label-avatar bg-purple">{{allnoreadcount}}</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">消息</h6>
							<a href="javaScript:void(0)">标记所有已读</a>
							<router-link to="/profile/setting">设置</router-link>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list chat-message">
								<ContectItem v-for="(item,key) in recent_contacts" :item ="item" :index = "-1" :key="key"/>
	
	
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
										<span class="chat-message-item">震惊……</span>
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
	
					<div v-show="notice_list.length>0" class="label-avatar bg-primary">{{notice_list.length}}</div>
	
					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">通知</h6>
							<a href="javaScript:void(0)">标记所有已读</a>
							<router-link to="/profile/setting">设置</router-link>
						</div>
	
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list"> 
								<div v-if="!notice_list.length">暂无</div>
								<NoticeItem v-for="(notice,key) in notice_list" :key ="key" :notice="notice"/>
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
									<h6 class="title">{{me.nick || me.username}}</h6>
								</div>
	
								<ul class="account-settings">
									<li>
										<router-link to='/profile'>
											<svg class="olymp-menu-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
											<span>个人设置</span>
										</router-link>
									</li>
									<li>
										<a href="javaScript:void(0)">
											<svg class="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
	
											<span>Create Fav Page</span>
										</a>
									</li>
									<li>
										<a @click="logout" href="javaScript:void(0)">
											<svg class="olymp-logout-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>
											<span>安全退出</span>
										</a>
									</li>
								</ul>
	
							<!-- 	<div class="ui-block-title ui-block-title-small">
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
								</ul> -->
	
				<!-- 				<div class="ui-block-title ui-block-title-small">
									<h6 class="title">Custom Status</h6>
								</div>
	
								<form class="form-group with-button custom-status">
									<input class="form-control" placeholder="" type="text" value="Space Cowboy">
	
									<button class="bg-purple">
										<svg class="olymp-check-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-check-icon"></use></svg>
									</button>
								</form> -->
	
							<!-- 	<div class="ui-block-title ui-block-title-small">
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
								</ul> -->
							</div>
	
						</div>
					</div>
					<router-link to="/home" class="author-name fn">
						<div class="author-title">
							{{me.nick||me.username}} <svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
						</div>
						<span class="author-subtitle">{{ me.desc||"什么也没有留下"}}</span>
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

	 
	import {mapGetters,mapActions} from 'vuex'
	 import PubSub from 'pubsub-js' 
	
	import req from '../../axios'
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
			...mapGetters(['me','token','friend_request','recent_contacts','notice_list']),
			allnoreadcount:function(){ //所有未读消息总和
					var count  = 0 ;
					for(var i = 0 ; i < this.recent_contacts.length ;i++){
						 count = count + this.recent_contacts[i].noreadcount
					}
					return count;
			}
		},
		methods: {
			...mapActions(['logout']),
			search() {
			/* 	if(this.keyword == ""){
					return 
				} */
				//if(this.$router.currentRoute.path != "/result"){
					this.$router.push({path:"/result",query:{keyword:this.keyword}})
					//return ;
				//}
					
					//his.$router.push("/result")
					//SearchResult - > result
				PubSub.publish("search",this.keyword)
				this.keyword = ""
				//console.log(router)
			},
		 async start () {
			/* 		const { data } = await this.request.getNotice() // 模拟请求
					this.noticelist = data;
					setTimeout(this.start, 3000) */
			},			
			
		},
		mounted: function(){
			//req.getFriendRequest();
			
			$('.selectpicker').selectpicker();
			$.material.init();
			
			//this.start()
		}
	}
</script>

<style>
</style>
