<template>
	<div>
		
					<div class="ui-block">
			<div class="ui-block-title">
				<h6 class="title">通知</h6>
				<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
			</div>
		
			
			<!-- Notification List -->
			
			<ul class="notification-list">
				
				<NoticeItem v-for="(notice,key) in lcoal_notice_list"  :key="key" :notice="notice"/>
			 
			</ul>
			<!-- ... end Notification List -->
		
		</div>
		
		
		<!-- Pagination -->
		
<!-- 		<nav aria-label="Page navigation">
			<ul class="pagination justify-content-center">
				<li class="page-item disabled">
					<a class="page-link" href="#" tabindex="-1">Previous</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: -10.3833px; top: -16.8333px; background-color: rgb(255, 255, 255); transform: scale(16.7857);"></div></div></a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item"><a class="page-link" href="#">...</a></li>
				<li class="page-item"><a class="page-link" href="#">12</a></li>
				<li class="page-item">
					<a class="page-link" href="#">Next</a>
				</li>
			</ul>
		</nav> -->
		
		<!-- ... end Pagination -->
		
	</div>
</template>

<script>
	import NoticeItem from "../Notification/NoticeItem"
	import {mapGetters} from 'vuex'
	
	export default{
		components:{
			NoticeItem
		},
		data(){
			return {
				lcoal_notice_list:[]
			}
		},
		computed:{
			...mapGetters(['notice_list'])
		},
		mounted(){
			//this.request.readedNotice(); //清除服务器的通知
			
			
			this.lcoal_notice_list = JSON.parse(localStorage.getItem("lcoal_notice_list")) || []

			//将新的添加到本地
			if(this.notice_list){
				this.notice_list.forEach(item=>{
					console.log(item)
					this.lcoal_notice_list.unshift(item)
				})
			}
			//重新保存到本地
			localStorage.setItem("lcoal_notice_list",JSON.stringify(this.lcoal_notice_list))
			this.$store.commit("clear_notice") //清除全局的通知
			//console.log(this.notice_list)	
		},
		created(){
			
		}
	}
</script>

<style>
</style>
