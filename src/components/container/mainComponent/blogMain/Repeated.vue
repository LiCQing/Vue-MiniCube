<template>
	<div  class="ui-block" >
		<div v-if="blog.blogStatus == -1">
			   原微博已删除
		</div>
		   
		<article @click="blogDetail" v-if="blog.blogStatus == 0" class="hentry post">
		
		
				<div @click="lookUserIndex" style="cursor: pointer;" class="post__author author vcard inline-items">
					 <img :src="blog.sender.cover" alt="author">
			
						<div class="author-date">
							<router-link class="h6 post__author-name fn" to="/profile">{{blog.sender.nick||blog.sender.username}}</router-link> 
							<div class="post__date">
								<time class="published" datetime="2017-03-24T18:18">
									{{pubTime}}	
								</time>
							</div>
						</div> 
				</div>
		
				
				 <p v-html="blog.blogContent">  </p>
				
				<!-- 视频主题 -->
				 <VideoPost v-if="blog.blogVideo" :videourl="blog.blogVideo"/> 
				
				<!-- 图片主题 -->
			    <div v-if="blog.blogImgs" class="post-thumb">
					<div class="row">
						<div  class="col-md-3 img3"  v-for="img in images">
							<img  :src="img" alt="photo">
						</div>
					</div>
				</div>
			</article>
		</div>
</template>

<script>

	import VideoPost from './VideoPost'
 
	
	import req from '../../../../axios'
	import util from '../../../../common'
	export default {
		props:['blog'],
		components: {
		   VideoPost
		},
		data() {
		   return {
			   
		   }
		},
		methods: {
			 getRepeat() {
				
			},
			blogDetail(){
				//this.$router.push({path:"/detail",query:{blogId:this.blog.id}})
			},
			lookUserIndex(){
					window.open("http://localhost:8080/#/pindex?uid="+this.blog.sender.id)
			}
		},
		computed:{
			pubTime: function(){
				return util.getTimeOfSpace(this.blog.blogSendTime	)
			},
			images: function(){
				var list = this.blog.blogImgs.split("|").map(img=>{return util.VAR().imgurl+img});
				//console.log(list)
				return list 
			}
		},
		async mounted(){
			/* let data =await	req.getBlogOfId(this.blogid)
			var repeatedBlog = data.data.data
			let user = await req.getUserInfo(repeatedBlog.userId)
			repeatedBlog.sender = user.data
			console.log(repeatedBlog)
			this.blog = repeatedBlog */
		}
	}
</script>

<style>

</style>
