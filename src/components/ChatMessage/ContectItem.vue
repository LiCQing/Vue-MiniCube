<template>
	<li>
		<div class="author-thumb">
			<img :src="item.sender.cover" alt="author">
		</div>
		<div class="notification-event" @click="getFieldMsgApi(item.sender.id)">
			<a href="javaScript:void(0);" class="h6 notification-friend">{{item.sender.name}}</a>
			<span class="chat-message-item" v-html="item.msg"></span>
			<span class="notification-date"><time class="entry-date updated " >{{sendTime}}</time></span>
		</div>
		<span class="notification-icon">
				<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
		</span>
						
		<div class="more">
			<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
		</div>
	</li>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	//import PubSub from 'pubsub-js'
	export default {
		props:['item'],
		methods:{
			...mapActions(['getFieldMsgApi'])
		},
		computed:{
			...mapGetters(['friend_list']),
			friend(){
				if(this.item == undefined) return
				var fr = null
				this.friend_list.forEach((f)=>{
					//console.log(f.id,this.item.id)
					if(f.id == this.item.id){
						fr = f ;
						return ;}
				})
				return fr==null ? {id:404,name:"anonymous",cover:"/static/img/avatar3-sm.jpg"} : fr
			},
			sendTime(){
				//console.log(this.item.time)
				 var time = Math.floor((new Date() - this.item.time)/1000 )//∫¡√Î
				if(time < 60) return time + "s ago"
				var mi = time / 60 
				if(mi < 60) return Math.floor(mi) + "m ago"
				var hour = mi / 60
				if(hour < 24) return Math.floor(hour)  +"h ago"
				var day = hour / 24 
				if(day < 7 ) return Math.floor(day)  +"day ago"
				return this.item.time 
				
			}
		},
	
	}
</script>

<style scope>

</style>
