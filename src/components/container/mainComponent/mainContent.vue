<template>
		<!-- Main Content -->
		
	<div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
		
		<PublishForm/>
		
		<div id="newsfeed-items-grid">
			<BlogItem/>
			
			<div class="ui-block">
				
				<!-- Post -->
				
				<article class="hentry post video">
				
						<div class="post__author author vcard inline-items">
							<img src="static/img/author-page.jpg" alt="author">
				
							<div class="author-date">
								<a class="h6 post__author-name fn" href="02-ProfilePage.html">狂野男孩</a> 分享了一个
								<a href="#">链接</a>
								<div class="post__date">
									<time class="published" datetime="2017-03-24T18:18">
										7小时前
									</time>
								</div>
							</div>
				
							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<ul class="more-dropdown">
									<li>
										<a href="#">编辑</a>
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
				
						<p>走过路过不要错过， 听一听不要钱，看一看长相伴...</p>
				
						<div class="post-video">
							<div class="video-thumb">
								<img src="static/img/video5.jpg" alt="photo">
								<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
									<svg class="olymp-play-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
									</svg>
								</a>
							</div>
				
							<div class="video-content">
								<a href="#" class="h4 title">Lost river (LIVE)</a>
								<p>in the world of colorful,some pople do that keep go to goal , if lost your self, please listen it..</p>
								<a href="#" class="link-site">ico.COM</a>
							</div>
						</div>
				
						<div class="post-additional-info inline-items">
				
							<a href="#" class="post-add-icon inline-items">
								<svg class="olymp-heart-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
								</svg>
								<span>15</span>
							</a>
				
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
								<a href="#">Jenny</a>, <a href="#">Robert</a> and
								<br>13 more liked this
							</div>
				
							<div class="comments-shared">
								<a href="#" class="post-add-icon inline-items">
									<svg class="olymp-speech-balloon-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
									</svg>
									<span>1</span>
								</a>
				
								<a href="#" class="post-add-icon inline-items">
									<svg class="olymp-share-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
									</svg>
									<span>16</span>
								</a>
							</div>
				
				
						</div>
				
						<div class="control-block-button post-control-button">
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-like-post-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
								</svg>
							</a>
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-comments-post-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
								</svg>
							</a>
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-share-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
								</svg>
							</a>
				
						</div>
				
					</article>
				
				<!-- .. end Post -->				
			</div>
			
			<div class="ui-block">
				<!-- Post -->
				
				<article class="hentry post has-post-thumbnail shared-photo">
				
						<div class="post__author author vcard inline-items">
							<img src="static/img/author-page.jpg" alt="author">
				
							<div class="author-date">
								<a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a> shared
								<a href="#">Diana Jameson</a>’s <a href="#">photo</a>
								<div class="post__date">
									<time class="published" datetime="2017-03-24T18:18">
										7 hours ago
									</time>
								</div>
							</div>
				
							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
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
				
						<p>Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here’s one of them...leave a kind comment!</p>
						<div class="row">
							<div  :class='imgClass' v-for="img in images" class="img3">
								<img @click="count" :src="img.src" alt="photo">
							</div>
						</div>
						
				
						<ul class="children single-children">
							<li class="comment-item">
								<div class="post__author author vcard inline-items">
									<img src="static/img/avatar8-sm.jpg" alt="author">
									<div class="author-date">
										<a class="h6 post__author-name fn" href="#">Diana Jameson</a>
										<div class="post__date">
											<time class="published" datetime="2017-03-24T18:18">
												16 hours ago
											</time>
										</div>
									</div>
								</div>
				
								<p>Here’s the first photo of our incredible photoshoot from yesterday. If you like it please say so and tel me what you wanna see next!</p>
							</li>
						</ul>
				
						<div class="post-additional-info inline-items">
				
							<a href="#" class="post-add-icon inline-items">
								<svg class="olymp-heart-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
								</svg>
								<span>15</span>
							</a>
				
							<ul class="friends-harmonic">
								<li>
									<a href="#">
										<img src="static/img/friend-harmonic5.jpg" alt="friend">
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
										<img src="static/img/friend-harmonic2.jpg" alt="friend">
									</a>
								</li>
							</ul>
				
							<div class="names-people-likes">
								<a href="#">Diana</a>, <a href="#">Nicholas</a> and
								<br>13 more liked this
							</div>
				
							<div class="comments-shared">
								<a href="#" class="post-add-icon inline-items">
									<svg class="olymp-speech-balloon-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
									</svg>
									<span>0</span>
								</a>
				
								<a href="#" class="post-add-icon inline-items">
									<svg class="olymp-share-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
									</svg>
									<span>16</span>
								</a>
							</div>
				
						</div>
				
						<div class="control-block-button post-control-button">
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-like-post-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
								</svg>
							</a>
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-comments-post-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
								</svg>
							</a>
				
							<a href="#" class="btn btn-control">
								<svg class="olymp-share-icon">
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
								</svg>
							</a>
				
						</div>
				
					</article>
				
				<!-- .. end Post -->				
			</div>
		</div>
		
		
		<a id="load-more-button" href="#" class="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
			<svg class="olymp-three-dots-icon">
				<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
			</svg>
		</a>
	
	</div>
		
	<!-- ... end Main Content -->
</template>

<script>
	import BlogItem from './blogMain/BlogItem'
	import PublishForm from './blogMain/PublishForm'
	export default {
	  components: {
		BlogItem,PublishForm
	  },
	  data(){
		  return{
			  images:[
				  {src:"static/img/post-photo6.jpg"},
			  ]
		  }
	  },
	  methods : {
		  count(){
			  console.log(this.images.length)
		  }
	  },
	  computed :{
	 		  imgClass: function(){
				 var size = this.images.length
				//4(6-9) - 6(2-5) - 12(1)
	 			 if(size == 1) {
					 return  "col-md-12"
				 }
				 if(size < 6){
					 return "col-md-6"
				 }
				return "col-md-4"
	 		  }
	 }
	}
</script>

<style scope>
	.img3{
		padding : 3px;
	}
	
	.img3 img{
		border-radius:5px;
		cursor: pointer;
		transition: all 0.1s;
	}
	
	.img3 :hover{
		transform: scale(1.1);
	}
	
	
</style>
