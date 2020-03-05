<template>

		<div @click="blogDetail" class="ui-block" v-if="blog.sender">
			
		<!-- Post 显示一条post，但是会有不一样的格式  -->
		<article class="hentry post ">
		
				<div @click="lookUserIndex"  style="cursor: pointer;"   class="post__author author vcard inline-items hot new" >
					   
					
						<img :src="blog.sender.cover" alt="author"> 
						
						
						<div class="author-date">
							 <a href="javaScropt:void(0)" class="h6 post__author-name fn">{{blog.sender.nick||blog.sender.username}}</a> 
							 <a v-if="blog.blogRepeat" href="javaScript:void(0)">转发</a> 
							 
							<div class="post__date">
								<time class="published" datetime="2017-03-24T18:18">
									{{pubTime}}		
								</time>
							</div>
						</div>
							
							<a v-if="!isFriend"  href="javaScript:void(0)" @click="addFriend" class="accept-request">
								<span class="icon-add without-text">
									<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
								</span>
							</a>
						
						<!-- 发布者操作按钮 -->
						<MoreOperation v-if="isAuthor" :index="index" :id="blog.blogId"/>
				</div>
		
				<p v-html="blog.blogContent">  </p>
				
				<!-- 视频主题 -->
				<VideoPost v-if="blog.blogVideo" :videourl="blog.blogVideo"/>
				
				<!-- 图片主题 -->
				
					
 				<div  v-if="blog.blogImgs"  class="post-thumb">
					<div class="row">
						<div  class="col-md-3 img3"  v-for="img in images">
								<ul class="js-zoom-gallery">
									<li>
										<a :href="img">
											<img :src="img" alt="photo">
										</a>
									</li>
								</ul>
						</div>
					</div>
				</div>
				
				<!-- 转发 -->
				<Repeated  v-if="blog.blogRepeat" :blog = "blog.repeatedBlog"> </Repeated>
				
			
				
				<!-- 点赞评论图标这些 -->
				
				<div class="post-additional-info inline-items ">
					<!-- 点赞 -->
					<a href="javaScript:void(0)" class="post-add-icon inline-items ">
						<svg class="olymp-heart-icon is-operated-color">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
						</svg>	
						<span>{{blog.likeCount}}</span>
					</a>
					<!-- 点赞人 头像 -->
				<!-- 	<ul class="friends-harmonic">
						<li v-for="people in post.likePeople">
							<a href="javaScript:void(0)">
								<img :src="people.cover" alt="friend">
							</a>
						</li>
					</ul> -->
					<!-- 点赞人 名称 -->
				<!-- 	<div class="names-people-likes">
						 <a v-for="(people,i) in post.likePeople" href="javaScript:void(0)">
							 {{people.name}},
						 </a>
						<br>等{{post.likeCount}}人觉得很赞
					</div> -->
					
					
					<!-- 评论转发 -->
					<div class="comments-shared">
						<a  @click="open"  href="JavaScript:void(0)" class="post-add-icon inline-items">
							<svg class="olymp-speech-balloon-icon">
								<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
							</svg>
							<span>{{blog.commentCount}}</span>
						</a>
		
						<a @click="repeat" href="JavaScript:void(0)" class="post-add-icon inline-items">
							<svg class="olymp-share-icon">
								<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
							</svg>
							<span>{{blog.repeatCount}}</span>
						</a>
					</div>
						
					
				</div>
				
					
				<div class="control-block-button post-control-button">
						
					<!-- <a href="javaScript:void(0)" class="btn btn-control featured-post">
						<svg class="olymp-trophy-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
						</svg>
					</a> -->
					
				 <!-- 操作 -->
					<a @click.stop="like" href="javaScript:void(0)" class="btn btn-control " :class="{'is-operated':isliked}">
						<svg class="olymp-like-post-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
						</svg>
					</a>
						
					<a @click.stop="open" href="javaScript:void(0)" class="btn btn-control">
						<svg class="olymp-comments-post-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
						</svg>
					</a>
						
					<a @click.stop="repeat" href="javaScript:void(0)" class="btn btn-control">
						<svg class="olymp-share-icon">
							<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
						</svg>
					</a>
						
				</div>
			
		</article>
						
		<!-- .. end Post -->	

		
		<CommentMore v-if="openComment" :commentlist="commentlist" :blogId="blog.blogId"/>
		
		
		
					
	</div>
	
</template>

<script>
	
	import VideoPost from './VideoPost'
	import CommentMore from './CommentMore'
	import MoreOperation from './MoreOperation'
	import OperateButton from './OperateButton'
	import Repeated from './Repeated'
	
	
	import { MessageBox } from 'element-ui'
	import {mapGetters} from 'vuex'
	
	import req from '../../../../axios'
	import util from '../../../../common'
	
	
	export default {
		props:['blog','index','toblank'],
	  components: {
		Comment,CommentMore,VideoPost,MoreOperation,OperateButton,Repeated
	  },
	  data() {
	  	return {
				openComment:false,
				isliked : false,
				commentlist:{}
	  	}
	  },
	  methods: {
			lookUserIndex(){
				  window.open("http://localhost:8080/#/pindex?uid="+this.blog.sender.id)
			},
			addFriend(){
				
			},
			//打开评论区
			async open(){	
				if(this.toblank){
					window.open("http://localhost:8080/#/detail?bid="+this.blog.blogId)
					return;
				}
				if(!this.openComment){
					//获取评论
					let data = await req.getCommentbyBid(this.blog.blogId)
					this.commentlist = data.data
				}
				this.openComment = !this.openComment
			},
			async like(){
				if(this.isliked){
					  let data = await req.unlikeBlog(this.blog.blogId);
						if(data.data.success){
							 util.alertSuccessMsg("取消点赞")
							 this.blog.likeCount = this.blog.likeCount - 1
						}
				}else{
					  let data = await req.likeBlog(this.blog.blogId);
						if(data.data.success){
							util.alertSuccessMsg("点赞成功")
							this.blog.likeCount = this.blog.likeCount + 1
						}
				}
				this.isliked = !this.isliked	
			},
			blogDetail(){
				//let url = "/blogdetail?id="+this.blog.id
				//this.$router.push({path:"/detail",query:{blogId:this.blog.id}})
				//window.open(url,'_blank')
			},

			repeat(){
				
				MessageBox.prompt('输入你的看法',"转发微博", {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => { //确定
					 var blog = {}
					 blog.blogContent = value
					 blog.blogRepeat = this.blog.blogRepeat || this.blog.blogId
					 PubSub.publish("publish_blog",blog)
        }).catch(() => {
               
        });
 
			},

	  },
	  
	  computed :{
			...mapGetters(['me','friend_list']),
		  pubTime: function(){
				return util.getTimeOfSpace(this.blog.blogSendTime	)
		  },
			isAuthor: function(){
				if(this.me.id && this.blog.sender.id)
					return this.me.id == this.blog.sender.id
				else false
			},
			images: function(){
				var list = this.blog.blogImgs.split("|").map(img=>{return util.VAR().imgurl+img});
				//console.log(list)
				 return list 
			},
			isFriend:function(){
				 var isFriend = false;
				 for(var i = 0 ; i < this.friend_list;i++){
						if(this.blog.sender.id == this.friend_list[i].id){
							isFriend = true;
						}
				 }
				 return isFriend||this.blog.sender.id == this.me.id;
			}
	  },
		async mounted(){
					//检查是否已经赞了
					if(this.me){
						let islike = await req.islike(this.blog.blogId)
						//console.log(islike)
						this.isliked = islike.data.success	
					}
				
						
					//载入图片
					CRUMINA.mediaPopups();
						 
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
		
		.hot{
			position: relative;
		}
		.hot a:after{
					background-color: red;
					border-radius: 3px;
					color: #fff;
					content: "hot";
					font-size: 10px;
					line-height: 1;
					padding: 1px 3px;
					position: absolute;
					right: -8px;
					top: 10px;
			}
			
			.new{
				position: relative;
			}
			.new a:after{
						background-color: red;
						border-radius: 3px;
						color: #fff;
						content: "new";
						font-size: 10px;
						line-height: 1;
						padding: 1px 3px;
						position: absolute;
						right: -8px;
						top: 10px;
				}
			
</style>
