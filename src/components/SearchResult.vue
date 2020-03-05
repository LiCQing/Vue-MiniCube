<template>
	<div class="page-has-left-panels page-has-right-panels">
			<!-- <Loading/> -->
			<LeftSidebar/>
			<RightSidebar/>
			<top-sidebar/>
		<!-- 	<TopResponsive/> -->
			<div class="header-spacer"></div>
			
			<!-- 内容 -->
			<div class="container">
				
					<Result/>
				
			</div>
			
			
			<FriendPopue/>
	</div>
</template>

<script>
	//import Loading from './Loading.vue'
	import LeftSidebar from './sidebar/LeftSidebar'
	import RightSidebar from './sidebar/RightSidebar'
	//import TopSidebar from './sidebar/TopSidebar'
	import TopResponsive from './sidebar/TopResponsive'
	
	import Result from './searchResult/Result'
	
	import BackToTop from './windowPopup/BackToTop'
	import FriendPopue from './windowPopup/FriendPopue'
	
	
	import PubSub from 'pubsub-js'
	
	export default {
	  components: {
	    LeftSidebar,RightSidebar,
		Result,
		BackToTop,FriendPopue
	  },
		mounted(){}
	}
</script>

<style>

</style>
