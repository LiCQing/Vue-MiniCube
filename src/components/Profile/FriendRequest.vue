<template>
		<div class="ui-block">
		<div class="ui-block-title">
			<h6 class="title">好友申请</h6>
			<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
		</div>
	
		
		<!-- Notification List Frien Requests -->
		
		<ul v-if="local_requst.length" class="notification-list friend-requests">
			
 			<FriendRequestItem v-for="(item,key) in local_requst" :ispage="true" :request = "item" :i="key" :key ="key"/>  
		
			
		</ul>
		
		<div v-else class="content-null">
			<img src="../../assets/null.png" alt="">
		</div>
		
		<!-- ... end Notification List Frien Requests -->
	</div>
	
</template>

<script>
	
	import FriendRequestItem from '../Friend/FriendRequestItem'
	
	import {mapGetters} from 'vuex'

	
	export default {
	  components: {
	     FriendRequestItem
	  },
		data(){
			return {
				local_requst:[]
			}
		},
		computed:{
			...mapGetters(['friend_request'])
		},
		mounted(){
			this.local_requst = JSON.parse(localStorage.getItem("request_item")) || []
			console.log(this.local_requst)
			if(this.friend_request){
				this.friend_request.forEach(item=>{
						//console.log(item)
					item.handler = false
					this.local_requst.unshift(item)
				})
			}
				//重新保存到本地
			localStorage.setItem("request_item",JSON.stringify(this.local_requst))
			this.$store.commit("clear_request") //清除全局的通知
			 
		},
		created(){
			PubSub.subscribe("deal_request",(msg,param)=>{				
				this.local_requst[param.i].handler = param.result
				localStorage.setItem("request_item",JSON.stringify(this.local_requst))
			})
		}
		
	}
	
</script>

<style>
</style>
