<template>
		<li :class="isHandler">
			<div class="author-thumb">
				<img :src="request.cover" alt="author">
			</div>
			<div class="notification-event">
				<a href="#" class="h6 notification-friend">{{request.username}}</a>
				<span class="chat-message-item">4个共同好友</span>
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
	
	import {mapActions} from 'vuex'
	
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
				request.acceptRequest(this.request.fid)
				this.removeRequest(this.i)
				
			},
			refuse(){
				//alert(this.request.fid)
				request.refuseRequest(this.request.fid)
				//this.isHandler = "refused"
			}
		},
	}
	
</script>

<style>
</style>
