<template>
		<li :class="isHandler">
			<div class="author-thumb">
				<img :src="request.requestCover" alt="author">
			</div>
			<div class="notification-event">
				<a href="#" class="h6 notification-friend">{{request.requestNick}}</a>
				<span>请求添加你为好友</span>
				<!-- <span class="chat-message-item">4个共同好友</span> -->
				<div>
					<span>附加消息:</span>
					<span>{{request.requestMsg}}</span>
				</div>
				<div style="width: 100%;text-align: right;	">
					<!-- {{sendTime}} -->
				</div>
			</div>
			<span class="notification-icon">
				<a   href="javaScript:void(0)" @click="accept" class="accept-request">
					<span class="icon-add without-text">
						<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					</span>
				</a>
				
				<a   href="javaScript:void(0)" @click="refuse" class="accept-request request-del">
					<span class="icon-minus">
						<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					</span>
				</a>
			
			</span>
	
			<div class="more">
				<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
				<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
			</div>
		</li>
				
</template>

<script>
    import request from '../../axios/index.js'
	import util from '../../common'
	import {mapActions,mapGetters} from 'vuex'
	
	export default{
		props:['request','i'],
		data(){
			return {
				isHandler:"accepted"
			}
		},
		methods: {
			...mapActions(['removeRequest']),
			accept() {
				//alert(this.request.fid)
				console.log(this.i)
				request.acceptRequest(this.request)
				this.removeRequest(this.i)
				
			},
			refuse(){
				//alert(this.request.fid)
				request.refuseRequest(this.request)
				//this.isHandler = "refused"
			}
		},//sendTime
		computed: {
			...mapGetters(['me']),
			sendTime:function(){
				return util.getTimeOfSpace(this.request.createTime)
			}
		},
	}
	
</script>

<style>
</style>
