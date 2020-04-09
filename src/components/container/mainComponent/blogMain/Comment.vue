<template>
	<li class="comment-item has-children"  style="padding: 10px 30px;">
		
		<div v-if="comment.cmtStatus == -1" class="post__author author vcard inline-items">
			 <p class="cmt-conent">
			 	 该评论已删除
			 </p>
		</div>
		
		<div v-else>
		
			<div class="post__author author vcard inline-items" style="margin-bottom: 10px;">
				<img :src="util.VAR().imgurl +  comment.userCover" alt="author">
						
				<div class="author-date">
					<a class="h6 post__author-name fn" href="javaScript:void(0)">{{comment.userNick}}</a>
					
					<a v-if="comment.replyId" href="javaScript:void(0)"> 回复 </a>
					 
					<a v-if="comment.replyId" class="h6 post__author-name fn" href="javaScript:void(0)">{{comment.beReplyUserNick}}</a>

					<div class="post__date">
						<time class="published" datetime="2017-03-24T18:18">
							{{pubTime}}
						</time>
					</div>
				</div>
						
			</div>
						
			<p v-html="comment.cmtContent" class="cmt-conent">
				
			</p>
						
		<!-- 	<a href="javaScript:void(0)" class="post-add-icon inline-items">
				<svg class="olymp-heart-icon">
					<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
				</svg>
				<span>5</span>
			</a> -->
		
				<a @click.stop="reply" href="javaScript:void(0)" class="reply">回复</a> 
				<a v-if="me.id == comment.userId" @click.stop="delComment"  href="javaScript:void(0)" class="reply">删除</a> 
			</div>
	<!-- 				
		<ul v-if="hasChildren" class="children">
			<comment />
		</ul> -->
					
	</li>
					
</template>
	
<script>
	import util from '../../../../common'
	import {mapGetters} from 'vuex'
	export default {
		props: {
			comment: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: -1
			},
		},
		name:"comment",
		data(){
			return {
				hasChildren:false
			}
		},
		computed: {
			...mapGetters(['me']),
			pubTime() {
				return util.getTimeOfSpace(this.comment.cmtCreateTime)
			}
		},
		methods: {
			reply() {
				PubSub.publish("reply_some" + this.comment.blogId,this.comment)
			},
			delComment(){
				PubSub.publish("del_reply"+ this.comment.blogId , this.index)
			}
		},
	}
</script>

<style scoped="scoped">
	
	.cmt-conent{
		
	}
	
	.cmt-conent img{
		border-radius: 100%;
	}
	
	.comment-items{
		padding: 15px 30px;
	}
	
</style>
