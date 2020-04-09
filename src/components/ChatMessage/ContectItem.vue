<template>
	<li @click.stop="chooseItem">
		<div class="author-thumb">
			<img :src="util.VAR().imgurl + item.friend.cover" alt="author" class="avatar">
		</div>
		<div class="notification-event" >
			<a href="javaScript:void(0);" class="h6 notification-friend">{{item.friend.nick||item.friend.username}}</a>
			<span class="chat-message-item" v-html="item.msg"></span>
			<span class="notification-date"><time class="entry-date updated " >{{sendTime}}</time></span>
		</div>
		<span class="notification-icon" style="position: relative;">
				<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
				<div v-show="item.noreadcount" class="label-avatar bg-purple">{{item.noreadcount}}</div>
		</span>
						
		<div class="more">
			<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
			<svg @click.stop="delItem" class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
		</div>
	</li>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	//import PubSub from 'pubsub-js'
	export default {
		props:['item','index'],
		methods:{
			/* ...mapActions(['getFieldMsgApi']), */
			chooseItem(){ //将index传给父组件
			    if(this.index > -1){
					this.$emit("chooseItem",this.index)
				}else{
					//console.log(this.$router) 
					this.$router.push("/profile/chat")
				}
				
			},
			getFieldMsgApi(){
				
				this.$emit("cho")
			},
			delItem(){
				this.$emit("delItem",this.index)
			}
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
				return this.util.getTimeOfSpace(this.item.sendTime)
			}
		},
	
	}
</script>

<style scope>

</style>
