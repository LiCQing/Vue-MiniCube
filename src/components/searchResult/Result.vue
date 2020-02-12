<template>
	<div class="row">
			<!-- Main Content -->
		
				<div class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<div class="h6 title">共搜索到{{result.count}}条结果: “<span class="c-primary">{{result.keyword}}</span>”</div>
						</div>
					</div>
		
					<div id="search-items-grid">
		
						<div class="ui-block">
		
							<!-- Search Result -->
							
							<article class="hentry post searches-item">
							
								<div class="post__author author vcard inline-items">
									<img src="static/img/avatar7-sm.jpg" alt="author">
							
									<div class="author-date">
										<a class="h6 post__author-name fn" href="javaScript:void(0)">Marina Valentine</a>
										<div class="country">Long Island, NY</div>
									</div>
							
									<span class="notification-icon">
										<a href="#" class="accept-request">
											<span class="icon-add without-text">
												<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>
							
										<a href="#" class="accept-request chat-message">
											<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
										</a>
									</span>
							
									<div class="more">
										<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
										<ul class="more-dropdown">
											<li>
												<a href="#">Edit Post</a>
											</li>
											<li>
												<a href="#">Delete Post</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
											<li>
												<a href="#">Select as Featured</a>
											</li>
										</ul>
									</div>
							
								</div>
							
								<p class="user-description">
									<span class="title">About Me:</span> Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
									<span class="title">Favourite TV Shows:</span> Breaking Good, RedDevil, People of Interest, The...
								</p>
							
								<div class="post-block-photo js-zoom-gallery">
									<a href="static/img/post-photo3.jpg" class="col col-3-width"><img src="static/img/post-photo3.jpg" alt="photo"></a>
									<a href="static/img/post-photo4.jpg" class="col col-3-width"><img src="static/img/post-photo4.jpg" alt="photo"></a>
									<a href="static/img/post-photo5.jpg" class="more-photos col-3-width">
										<img src="static/img/post-photo5.jpg" alt="photo">
										<span class="h2">+352</span>
									</a>
								</div>
							
								<div class="post-additional-info">
							
									<ul class="friends-harmonic">
										<li>
											<a href="#">
												<img src="static/img/friend-harmonic9.jpg" alt="friend">
											</a>
										</li>
										<li>
											<a href="#">
												<img src="static/img/friend-harmonic10.jpg" alt="friend">
											</a>
										</li>
										<li>
											<a href="#">
												<img src="static/img/friend-harmonic7.jpg" alt="friend">
											</a>
										</li>
										<li>
											<a href="#">
												<img src="static/img/friend-harmonic8.jpg" alt="friend">
											</a>
										</li>
										<li>
											<a href="#">
												<img src="static/img/friend-harmonic11.jpg" alt="friend">
											</a>
										</li>
									</ul>
									<div class="names-people-likes">
										You and Marina have
										<a href="#">4 Friends in Common</a>
									</div>
							
									<div class="friend-count">
										<a href="#" class="friend-count-item">
											<div class="h6">189</div>
											<div class="title">Friends</div>
										</a>
										<a href="#" class="friend-count-item">
											<div class="h6">254</div>
											<div class="title">Photos</div>
										</a>
										<a href="#" class="friend-count-item">
											<div class="h6">16</div>
											<div class="title">Videos</div>
										</a>
									</div>
							
								</div>
							
							</article>
							<!-- ... end Search Result -->
						</div>
		
					</div>
		
					<a id="load-more-button" href="javaScript:void(0)" class="btn btn-control btn-more" data-load-link="search-items-to-load.html" data-container="search-items-grid">
						<svg class="olymp-three-dots-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
						</svg>
					</a>
				</div>
		
				<!-- ... end Main Content -->
		
		
	
		
		
				<!-- Right Sidebar -->
		
				<div class="col col-xl-4 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
		
					
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">用户搜索结果</h6>
						<!-- 	<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
						 -->
						</div>
		
						
						
						<!-- 好友搜索结果 -->
						
						<ul class="widget w-friend-pages-added notification-list friend-requests">
							<li class="inline-items">
								<div class="author-thumb">
									<img src="static/img/avatar38-sm.jpg" alt="author">
								</div>
								<div class="notification-event">
									<a href="#" class="h6 notification-friend">Francine Smith</a>
									<span class="chat-message-item">8 Friends in Common</span>
								</div>
								<span class="notification-icon">
									<a href="javaScript:void(0)" @click="addFriend(5)" class="accept-request">
										<span class="icon-add without-text">
											<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>
									</a>
								</span>
							</li>
						
		
						
						</ul>
						
						<!-- ... end W-Action -->
					</div>
					<!-- 加入平台 -->
							<div class="ui-block">
					
									
									<!-- W-Action -->
									
									<div class="widget w-action">
									
										<img src="static/img/logo.png" alt="Olympus">
										<div class="content">
											<h4 class="title">MINICUBE</h4>
											<span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
											<router-link to="/login" class="btn btn-bg-secondary btn-md">Register Now!</router-link>
										</div>
									</div>
									
									<!-- ... end W-Action -->
								</div>
				</div>
		
				<!-- ... end Right Sidebar -->
	</div>
</template>

<script>
	import request from '../../axios/index.js'
	
	export default {
		data() {
			return {
				result:{
					keyword:"li",
					count:"5"
				}
			}
		},
		methods: {
			addFriend(id) {
				request.addFriend(id)
			}
		},
		mounted(){
			PubSub.subscribe("search",(m,key)=>{
				 var req = request.search(key)
				 req.then((res)=>{
					 console.log(res)
				 })
				 this.result.keyword = key 
			})
		}
	}
</script>

<style>

</style>
