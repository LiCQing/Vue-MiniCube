<!-- 个人主页，供别人查看 -->
<template>
	<div class="page-has-left-panels page-has-right-panels">
			<!-- <Loading/> -->
			<LeftSidebar/>
			<RightSidebar/>
			<TopSidebar/>
			<TopResponsive/>
			<div class="header-spacer"></div>
			
			<HeaderProfile/>
			<!-- <Content/> -->
			
			<router-view></router-view>
			
			
			<ChatPopue/>
			<BackToTop/>
			
			
			
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
	
	import ChatPopue from './windowPopup/ChatPopue'
	

	
	export default {
	  components: {
	    LeftSidebar,RightSidebar,TopSidebar,TopResponsive,
		HeaderProfile,Content,BackToTop,ChatPopue
	  }
	}
</script>

<style>
</style>
