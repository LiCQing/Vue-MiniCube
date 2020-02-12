<template>
		<div class="ui-block">
		<!-- Post
			显示一条post，但是会有不一样的格式
		 -->
		<article class="hentry post">
		
				<div class="post__author author vcard inline-items">
					<img :src="blog.sender.cover" alt="author">
		
					<div class="author-date">
						<router-link class="h6 post__author-name fn" to="/profile">{{blog.sender.username}}</router-link>
						<div class="post__date">
							<time class="published" datetime="2017-03-24T18:18">
								{{blog.blogSendTime}}
							</time>
						</div>
					</div>
					
				<!-- 发布者操作按钮 -->
				<MoreOperation v-if="isAuthor"/>

		
				</div>
		
				<p v-html="blog.blogContent"> 
				</p>
				
				<!-- 视频主题 -->
				<VideoPost v-if="post.isVideoPost"/>
				
				<!-- 图片主题 -->
				<div v-if="post.isImgPost" class="post-thumb">
					<img src="static/img/post__thumb1.jpg" alt="photo">
				</div>
				
				<div class="post-additional-info inline-items ">
					<!-- 点赞 -->
					<a href="javaScript:void(0)" class="post-add-icon inline-items ">
						<svg class="olymp-heart-icon is-operated-color">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
						</svg>	
						<span>{{post.likeCount}}</span>
					</a>
					<!-- 点赞人 头像 -->
					<ul class="friends-harmonic">
						<li v-for="people in post.likePeople">
							<a href="javaScript:void(0)">
								<img :src="people.cover" alt="friend">
							</a>
						</li>
					</ul>
					<!-- 点赞人 名称 -->
					<div class="names-people-likes">
						 <a v-for="(people,i) in post.likePeople" href="javaScript:void(0)">
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
				
					
				<div class="control-block-button post-control-button">
						
					<!-- <a href="javaScript:void(0)" class="btn btn-control featured-post">
						<svg class="olymp-trophy-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
						</svg>
					</a> -->
						
					<a href="javaScript:void(0)" class="btn btn-control is-operated">
						<svg class="olymp-like-post-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
						</svg>
					</a>
						
					<a href="javaScript:void(0)" class="btn btn-control">
						<svg class="olymp-comments-post-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
						</svg>
					</a>
						
					<a href="javaScript:void(0)" class="btn btn-control">
						<svg class="olymp-share-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
						</svg>
					</a>
						
				</div>
			
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
	
	import {mapGetters} from 'vuex'
	export default {
		props:['blog','index'],
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
				isAuthor: true,
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
			...mapGetters(['me']),
		  pubTime: function(){
			return "1小时前"
		  },
			isAuthor: function(){
				return this.me.id == this.blog.sender.id
			}
	  },
		mounted(){
			//不是自己发的需要从服务器获取发送人信息
			 if(!this.blog.sender){
				   blog.sender = {}
				   console.log("this is " + this.blog)
			 }
			 
			 
		}
	}
</script>

<style scoped>
		.is-operated{
			background: #ff5e3a;
		}
		
		.is-operated-color{
			color: #ff5e3a;
		}
	
</style>
