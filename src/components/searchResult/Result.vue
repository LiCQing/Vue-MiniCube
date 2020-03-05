<template>
	<div class="row">
			<!-- Main Content -->
		
				<div class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<div  v-if="blogresult && blogresult.length>0" class="h6 title">共搜索到{{blogresult.length}}条“<span class="c-primary">{{keyword}}</span>”相关微博</div>
							<div v-else class="h6 title">未搜到“<span class="c-primary">{{keyword}}</span>”相关微博</div>
						</div>
					</div>
		
					<div v-if="blogresult && blogresult.length>0"  id="search-items-grid">
					   
					    <BlogItem v-for="(blog,index) in blogresult" :blog = "blog"  :key="index"/>
						
					</div>
					
					<!-- 推荐微博 -->
					
					<div  class="ui-block">
						<div class="ui-block-title">
							<div  class="h6 title">推荐微博</div>
						</div>
					</div>
		
					<!-- <div v-if="blogresult.length>0"  id="search-items-grid">
					
						<BlogItem v-for="(blog,index) in blogresult" :blog = "blog"  :key="index"/>
						
					</div> -->
					
		
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
							<h6 v-if="friendresult&&friendresult.length>0" class="title">共搜索到{{friendresult.length}}个“<span class="c-primary">{{keyword}}</span>”相关用户</h6>
							<h6 v-else class="title">未搜索到{{friendresult.length}}个“<span class="c-primary">{{keyword}}</span>”相关用户</h6>
						</div>
		
						<!-- 好友搜索结果 -->
						<ul v-if="friendresult&&friendresult.length > 0" class="widget w-friend-pages-added notification-list friend-requests">
							<li v-for="friend in friendresult"  class="inline-items">
								<div class="author-thumb">
									<img :src="friend.cover" alt="author">
								</div>
								<div class="notification-event">
									<a href="#" class="h6 notification-friend">{{friend.nick || friend.username}}</a>
									<span class="chat-message-item">8个共同好友</span>
								</div>
								<span class="notification-icon">
									<a v-if="friend.id != me.id"  href="javaScript:void(0)" @click="addFriend(friend.id)" class="accept-request">
										<span class="icon-add without-text">
											<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>
									</a>
								</span>
							</li>
						</ul>
					</div>
					<!-- 加入平台 -->
					<div  v-if="!me.id" class="ui-block">
				  		
				  		<!-- W-Action -->
				  		
				  		<div class="widget w-action">
				  		
				  			<img src="static/img/logo.png" alt="Olympus">
				  			<div class="content">
				  				<h4 class="title">MINICUBE</h4>
				  				<span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
				  				<router-link to="/login" class="btn btn-bg-secondary btn-md">加入我们!</router-link>
				  		</div>
				  		
				  		<!-- ... end W-Action -->
				  	</div>
					</div>
							
							<!-- 推荐用户 -->
							
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">热门用户</h6>
						</div>
		
						<!-- 好友搜索结果 -->
						<ul  class="widget w-friend-pages-added notification-list friend-requests">
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
					</div>	
							
			</div>
		
				<!-- ... end Right Sidebar -->
	</div>
</template>

<script>
	import request from '../../axios/index.js'
	import util from '../../common'
	
	import BlogItem from '../container/mainComponent/blogMain/BlogItem'
	
	import {mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				friendresult:[],
				blogresult:[],
				keyword:""
			}
		},
		components:{
		 	BlogItem
		},
		methods: {
			addFriend(id) {
				var param = {
					receiveId:id,
					requestMsg:"你好有趣啊"}
					
				request.addFriend(param)
			}
		},
		computed:{
			...mapGetters(['me'])
		},
		updated(){
			//PubSub.subscribe("search",(m,key)=>{
			/* 	this.keyword = this.$router.currentRoute.query.keyword	
				
				
				//console.log(this.keyword)
				 request.search(this.keyword).then((res)=>{
					 this.friendresult = res.data.data
				 })
				 
				 request.searchBlog(this.keyword).then((res)=>{
					this.blogresult = res.data.data
				 }) */
				 
				
			//})
		},
		mounted(){
			
				this.keyword = this.$router.currentRoute.query.keyword	
										//console.log(this.keyword)
							request.search(this.keyword).then((res)=>{
								this.friendresult = res.data.data
							})
							request.searchBlog(this.keyword).then((res)=>{
								this.blogresult = res.data.data
							})
			
			PubSub.subscribe("search",(m,key)=>{
				this.keyword = this.$router.currentRoute.query.keyword	
				//console.log(this.keyword)
				request.search(this.keyword).then((res)=>{
					this.friendresult = res.data.data
				})
				request.searchBlog(this.keyword).then((res)=>{
					this.blogresult = res.data.data
				})
				
				
		})
		}
	}
</script>

<style>

</style>
