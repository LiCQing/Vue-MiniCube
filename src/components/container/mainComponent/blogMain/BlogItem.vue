<template>
		<div class="ui-block">
		<!-- Post
			显示一条post，但是会有不一样的格式
		 -->
		<article class="hentry post">
		
				<div class="post__author author vcard inline-items">
					<img src="static/img/author-page.jpg" alt="author">
		
					<div class="author-date">
						<a class="h6 post__author-name fn" href="02-ProfilePage.html">{{post.author.name}}</a>
						<div class="post__date">
							<time class="published" datetime="2017-03-24T18:18">
								{{pubTime}}
							</time>
						</div>
					</div>
					
				<!-- 发布者操作按钮 -->
				<MoreOperation v-if="post.isAuthor"/>

		
				</div>
		
				<p>{{post.content}}
				</p>
				
				<!-- 视频主题 -->
				<VideoPost v-if="post.isVideoPost"/>
				
				<!-- 图片主题 -->
				<div v-if="post.isImgPost" class="post-thumb">
					<img src="static/img/post__thumb1.jpg" alt="photo">
				</div>
				
				<div class="post-additional-info inline-items">
					<!-- 点赞 -->
					<a href="#" class="post-add-icon inline-items">
						<svg class="olymp-heart-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
						</svg>	
						<span>{{post.likeCount}}</span>
					</a>
					<!-- 点赞人 头像 -->
					<ul class="friends-harmonic">
						<li v-for="people in post.likePeople">
							<a href="#">
								<img :src="people.cover" alt="friend">
							</a>
						</li>
					</ul>
					<!-- 点赞人 名称 -->
					<div class="names-people-likes">
						 <a v-for="(people,i) in post.likePeople" href="#">
							 {{people.name}},
						 </a>
						<br>等{{post.likeCount}}人觉得很赞
					</div>
					
					
					
					<!-- 评论转发 -->
					<div class="comments-shared">
						<a href="JavaScript:void(0)" @click="open"  class="post-add-icon inline-items">
							<svg class="olymp-speech-balloon-icon">
								<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
							</svg>
							<span>17</span>
						</a>
		
						<a href="JavaScript:void(0)" class="post-add-icon inline-items">
							<svg class="olymp-share-icon">
								<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
							</svg>
							<span>24</span>
						</a>
					</div>
						
					
				</div>
				
					
				<OperateButton/>
			
		</article>
						
		<!-- .. end Post -->	
		<ul v-if="post.hasComment" class="comments-list">
			<Comment />
		</ul>
		
		<CommentMore v-show="openComment"/>
		
		
		
					
	</div>
	
</template>

<script>
	import Comment from './Comment'
	import VideoPost from './VideoPost'
	import CommentMore from './CommentMore'
	import MoreOperation from './MoreOperation'
	import OperateButton from './OperateButton'
	
	export default {
	  components: {
		Comment,CommentMore,VideoPost,MoreOperation,OperateButton
	  },
	  data() {
	  	return {
	  		post: {
				author:{
					name:"Bob",
				},
	  			content: '“日环食，或许是月亮给太阳的拥抱吧。但是更多时候，只有日偏食，还未拥抱，便已离去。ccccccccccccc”',
				isVideoPost:false,
				isImgPost:false,
				isAuthor: false,
				likeCount:98456,
				likePeople:[
					{name:"Bob",cover:"static/img/friend-harmonic7.jpg"},
					{name:"Tim",cover:"static/img/friend-harmonic8.jpg"},
					{name:"Tom",cover:"static/img/friend-harmonic9.jpg"},
					{name:"jarry",cover:"static/img/friend-harmonic10.jpg"},
					{name:"Ham",cover:"static/img/friend-harmonic11.jpg"},
				],
				hasComment:false
	  		},
			openComment:false
			
	  	}
	  },
	  methods: {
	  	onSubmit() {
	  		console.log('submit!');
	  		this.$ajax.get('blog/get/1').then((res) => {
	  			console.log(res.data)
	  		}).catch((err) => {
	  			console.log(err)
	  		})
	  	},
		open(){
			this.openComment = !this.openComment
		}

	  },
	  
	  computed :{
		  pubTime: function(){
			return "1小时前"
		  }
	  }
	}
</script>

<style>
</style>
