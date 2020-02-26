<template>
	<div style="position: relative;">
		
		<ul  class="comments-list children single-children" style="padding-left: 25px;" v-if="commentlist.length > 0">
			<!-- 评论 -->
			<Comment  v-for="(comment,key) in commentlist" :blogId="blogId" :index=key :comment="comment" :key = "key"/>
			
			<!-- ... end Comments -->
			<a href="javaScript:void(0)" class="more-comments">查看更多评论 <span>+</span></a>
			
		</ul>
		
		
		
		<!-- Comment Form  -->
		<div class="add-options-message" style="padding:0px;position: absolute;right: 0px;bottom: 80px;width: 26px;">
			<div class="options-message smile-block"><svg class="olymp-happy-sticker-icon">
					<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use>
				</svg>
				<ul class="more-dropdown more-with-triangle triangle-bottom-right" style="right: -50px;">
					<li><a @click="addImg"  href="javascript:void(0);"><img src="static/img/icon-chat1.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat2.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat3.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat4.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat5.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat6.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat7.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat8.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat9.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat10.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat11.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat12.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat13.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat14.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat15.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat16.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat17.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat18.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat19.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat20.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat21.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat22.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat23.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat24.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat25.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat26.png" alt="icon"></a></li>
					<li><a @click="addImg" href="javascript:void(0);"><img src="static/img/icon-chat27.png" alt="icon"></a></li>
				</ul>
			</div>
		</div>

		<form class="comment-form inline-items">
			<div v-html="tips">  </div>
			<div class="post__author author vcard inline-items">
				<img :src="me.cover" alt="author">
				
				<div class="form-group with-icon-right ">
					<div @keydown="input" ref="inputdiv" class="form-control comment-img"  contentEditable="true" 
					style="height: 80px;padding: 5px;">
					 <!-- 输入区 -->
					</div>
				</div>
			</div>

			<button @click.top="comment" type="button" class="btn btn-md-2 btn-primary">发表评论</button>

			<!-- <button @click="" type="button" class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">取消</button> -->

		</form>

		<!-- ... end Comment Form  -->

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import req from '../../../../axios'
	import util from '../../../../common'
	
	import Comment from './Comment'
	
	export default {
		props: ['blogId','commentlist'],
		components: {
		Comment
		},
		data() {
			return {
				msg: "",
				tips:"评论",
				type:0, //默认评论
				commentparam:{}
			}
		},
		computed: {
			...mapGetters(['me'])
		},
		methods: {
			input(e) {
				this.msg = e.target.innerHTML;
			},
			addImg(e) {
				var msg = this.$refs.inputdiv.innerHTML
				this.$refs.inputdiv.innerHTML = msg + e.target.outerHTML
				this.msg = msg + e.target.outerHTML;
			},
			comment(e){
				var comment = {
					cmtContent:this.$refs.inputdiv.innerHTML,
					blogId:this.blogId
				}
				if(this.type = 1){
					comment.replyId = this.commentparam.cmtId //回复的id等于评论的id
					comment.beReplyUserId = this.commentparam.userId
					comment.beReplyUserNick = this.commentparam.userNick
				}		
				
				req.sendComment(comment).then(res=>{
					util.alertSuccessMsg("评论成功")
					this.commentlist.push(res.data.data)
					console.log(res)
				})
				this.$refs.inputdiv.innerHTML = ""
				
			}
		},
		mounted(){
			PubSub.subscribe("reply_some"+this.blogId,  (msg,param) =>{
				this.tips = "<a> 回复 </a>" + param.userNick +" : " + param.cmtContent
				this.type = 1 //回复
				this.commentparam = param
				console.log(param)
			})	
			
			PubSub.subscribe("del_reply"+this.blogId,  (msg,index) =>{
				var comment = this.commentlist[index]
				req.delComment(comment.cmtId).then(res=>{
					
					comment.cmtStatus = -1;
					this.commentlist[index] = comment
				})
				
				
				 
			})	
		}
			
	}
</script>

<style scoped="scoped">
	.comment-img{
		
	}
	
	.comment-img img{
		display: inline-block;
		margin: 0px;
		min-width: initial;
		max-width: initial;
		height: initial;
		width: initial;
		border-radius: 100%;
	}
</style>
