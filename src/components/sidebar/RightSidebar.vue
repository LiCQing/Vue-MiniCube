<template>
	<!-- Fixed Sidebar Right -->
	<!-- 固定右侧 -->
	<div v-show="friend_list.length" :class="openCss" class="fixed-sidebar right">
		<div class="fixed-sidebar-right sidebar--small" id="sidebar-right">
	
			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<ul class="chat-users">
					<li  v-for="(friend,index) in friend_list"   class="inline-items js-chat-open">
						<div @click="startChat(index)" class="author-thumb">
							<img alt="author" :src="util.VAR().imgurl + friend.cover"  class="avatar">
							<span class="icon-status online"></span>
						</div>
					</li>
				</ul>
			</div>
	
			<div class="search-friend inline-items">
				<a @click='openFriend("open")' href="javascript:void(0);" class="js-sidebar-open">
					<svg class="olymp-menu-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
				</a>
			</div>
	
			<a href="javascript:void(0);" @click="openChat" class="olympus-chat inline-items js-chat-open">
				<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
			</a>
	
		</div>
		
		<!-- 所有的好友 -->
		<div class="fixed-sidebar-right sidebar--large" id="sidebar-right-1">
			<div class="mCustomScrollbar" data-mcs-theme="dark">
	
				<div class="ui-block-title ui-block-title-small">
					<a href="javascript:void(0);" class="title">未分组好友</a>
					<a href="javascript:void(0);">设置</a>
				</div>
	
				<ul v-if="friend_list.length" class="chat-users">
					<li v-for="(friend,index) in friend_list_filtered" class="inline-items js-chat-open">
						<div class="author-thumb">
							<img alt="author" :src="util.VAR().imgurl + friend.cover" class="avatar">
							<span class="icon-status online"></span>
						</div>
	
						<div class="author-status">
							<a href="javascript:void(0);" class="h6 author-name">{{friend.nick ||friend.username}}</a>
							<span class="status">ONLINE</span>
						</div>
	
						<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
							<ul class="more-icons">
								<li @click="startChat(index)"> 
									<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
								</li>
								<li @click="lookUserIndex(friend)">
									<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" class="olymp-add-to-conversation-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-home-icon"></use></svg>
								</li>
								<li @click="delFriend(index)">
									<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" class="olymp-block-from-chat-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				
				<div v-show="!friend_list_filtered.length" class="content-null"><img src="../../assets/null.png" alt=""></div>
	
			</div>
	
			<div class="search-friend inline-items">
				<form class="form-group" >
					<input v-model="filterKey" class="form-control" placeholder="搜索朋友"  value="" type="text">
					 <input type="text" style="display: none;"> <!--避免回车提交 -->
				</form>
	
				<!-- <a href="29-YourAccount-AccountSettings.html" class="settings">
					<svg class="olymp-settings-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
				</a> -->
	
				<a @click="openFriend('')" href="javascript:void(0);" class="js-sidebar-open">
					<svg class="olymp-close-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a>
			</div>
	
		<!-- 	<a  @click.stop='openChat()' href="javascript:void(0);"  class="olympus-chat inline-items ">
				<h6 class="olympus-chat-title">OLYMPUS CHAT</h6>
				<svg  class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
			</a> -->
	
		</div>
	</div>
	
	<!-- ... end Fixed Sidebar Right -->
</template>

<script>
	import PubSub from 'pubsub-js'
	import {mapGetters,mapActions} from 'vuex'
	import req from '../../axios'
	
	export default{ 
		methods : {
			...mapActions(['removeFriend']),
			lookUserIndex(friend){
					window.open("http://localhost:8080/#/pindex?uid="+friend.id)
			},
			openFriend(css){
				this.openCss=css
			},
			delFriend(index){
				this.removeFriend(index)
			},
			openChat(){
				 var css = this.isOpenChat?'':'open-chat'
				 PubSub.publish('openChat',css)
				 this.isOpenChat = !this.isOpenChat
			},
			//开始和某人聊天
			startChat(index){
				//ChatMessage接收事件 和下表
				 PubSub.publish('chat-with-friend',index)
				 
				 if(this.$router.currentRoute.path=="/profile/chat"){
					 return ;
				 }
				 this.$router.push("/profile/chat")
			}
		},
		data(){
			return {
				openCss:"",
				isOpenChat:false,
				filterKey:""
			}
		},
		mounted: function(){
			CRUMINA.perfectScrollbarInit()
			
			req.getFriendList();
			
		},
		computed: {
			...mapGetters(['friend_list']),
			name() {
				return 1;//this.${2:data} 
			},
			friend_list_filtered(){
				if(this.filterKey == "") return this.friend_list
				return this.friend_list.filter(item=>{
					var result = false
					if(item.nick){
						result = result || item.nick.indexOf(this.filterKey) != -1
					}
					if(item.username){
						result = result || item.username.indexOf(this.filterKey) != -1
					}
					 return result
				})
			}
		},
		
		
	}
</script>

<style>
</style>
