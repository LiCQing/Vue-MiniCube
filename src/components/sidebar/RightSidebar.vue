<template>
	<!-- Fixed Sidebar Right -->
	<!-- 固定右侧 -->
	<div :class="openCss" class="fixed-sidebar right">
		<div class="fixed-sidebar-right sidebar--small" id="sidebar-right">
	
			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<ul class="chat-users">
					<li class="inline-items js-chat-open">
						<div class="author-thumb">
							<img alt="author" src="static/img/avatar67-sm.jpg" class="avatar">
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
	
		<div class="fixed-sidebar-right sidebar--large" id="sidebar-right-1">
	
			<div class="mCustomScrollbar" data-mcs-theme="dark">
	
				<div class="ui-block-title ui-block-title-small">
					<a href="javascript:void(0);" class="title">Close Friends</a>
					<a href="javascript:void(0);">Settings</a>
				</div>
	
				<ul class="chat-users">
					<li class="inline-items js-chat-open">
	
						<div class="author-thumb">
							<img alt="author" src="static/img/avatar67-sm.jpg" class="avatar">
							<span class="icon-status online"></span>
						</div>
	
						<div class="author-status">
							<a href="javascript:void(0);" class="h6 author-name">Carol Summers</a>
							<span class="status">ONLINE</span>
						</div>
	
						<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
	
							<ul class="more-icons">
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" class="olymp-add-to-conversation-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" class="olymp-block-from-chat-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
								</li>
							</ul>
	
						</div>
	
					</li>
				</ul>
	
	
				<div class="ui-block-title ui-block-title-small">
					<a href="javascript:void(0);" class="title">MY FAMILY</a>
					<a href="javascript:void(0);">Settings</a>
				</div>
	
				<ul class="chat-users">
					<li class="inline-items js-chat-open">
	
						<div class="author-thumb">
							<img alt="author" src="static/img/avatar64-sm.jpg" class="avatar">
							<span class="icon-status online"></span>
						</div>
	
						<div class="author-status">
							<a href="javascript:void(0);" class="h6 author-name">Sarah Hetfield</a>
							<span class="status">ONLINE</span>
						</div>
	
						<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
	
							<ul class="more-icons">
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" class="olymp-add-to-conversation-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" class="olymp-block-from-chat-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
								</li>
							</ul>
	
						</div>
					</li>
				</ul>
	
	
				<div class="ui-block-title ui-block-title-small">
					<a href="javascript:void(0);" class="title">UNCATEGORIZED</a>
					<a href="javascript:void(0);">Settings</a>
				</div>
	
				<ul class="chat-users">
					<li class="inline-items js-chat-open">
	
						<div class="author-thumb">
							<img alt="author" src="static/img/avatar71-sm.jpg" class="avatar">
							<span class="icon-status online"></span>
						</div>
	
						<div class="author-status">
							<a href="javascript:void(0);" class="h6 author-name">Bruce Peterson</a>
							<span class="status">ONLINE</span>
						</div>
	
						<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
	
							<ul class="more-icons">
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" class="olymp-add-to-conversation-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
								</li>
	
								<li>
									<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" class="olymp-block-from-chat-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
								</li>
							</ul>
	
						</div>
	
	
					</li>
				</ul>
	
			</div>
	
			<div class="search-friend inline-items">
				<form class="form-group" >
					<input class="form-control" placeholder="Search Friends..." value="" type="text">
				</form>
	
				<a href="29-YourAccount-AccountSettings.html" class="settings">
					<svg class="olymp-settings-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
				</a>
	
				<a @click="openFriend('')" href="javascript:void(0);" class="js-sidebar-open">
					<svg class="olymp-close-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a>
			</div>
	
			<a  @click='openChat' href="javascript:void(0);"  class="olympus-chat inline-items js-chat-open">
	
				<h6 class="olympus-chat-title">OLYMPUS CHAT</h6>
				<svg  class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
			</a>
	
		</div>
	</div>
	
	<!-- ... end Fixed Sidebar Right -->
</template>

<script>
	import PubSub from 'pubsub-js'
	export default{ 
		
		methods : {
			openFriend(css){
				this.openCss=css
			},
			openChat(){
				 var css = this.isOpenChat?'':'open-chat'
				 PubSub.publish('openChat',css)
				 this.isOpenChat = !this.isOpenChat
			}
		},
		data(){
			return {
				openCss:"",
				isOpenChat:false
			}
		}
	}
</script>

<style>
</style>
