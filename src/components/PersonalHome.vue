<!-- 个人页面，可用发布状态 -->
<template>
	<div class="page-has-left-panels page-has-right-panels">
			<!-- <Loading/> -->
			<!-- <LeftSidebar/> -->
			<RightSidebar/>
			<TopSidebar/>
			<TopResponsive/>
			<div class="header-spacer"></div>
			
			<Content :home = 'true'/>
			
			<BackToTop/>
			<FriendPopue/>
	</div>
</template>

<script>
	//import Loading from './Loading.vue'
	import LeftSidebar from './sidebar/LeftSidebar'
	import RightSidebar from './sidebar/RightSidebar'
	import TopSidebar from './sidebar/TopSidebar'
	import TopResponsive from './sidebar/TopResponsive'
	
	import HeaderProfile from './container/HeaderProfile'
	import Content from './container/Content'
	
	import BackToTop from './windowPopup/BackToTop'
	import FriendPopue from './windowPopup/FriendPopue'
	
	export default {
	  components: {
	   LeftSidebar,RightSidebar,TopSidebar,TopResponsive,
		HeaderProfile,Content,BackToTop,FriendPopue
	  }
	}
</script>

<style>
</style>
