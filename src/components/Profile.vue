<template>
	<div class="page-has-left-panels page-has-right-panels">
	
	<LeftSidebar/>
	<RightSidebar/>
	<top-sidebar/>
<!-- 	<TopResponsive/> -->

	<div class="header-spacer"></div>
	
	
	<!-- Your Account Personal Information -->
	
	<div class="container">
		<div class="row">
			<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
				<router-view></router-view>
			</div>
	
			<div class="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
				<div class="ui-block">
	
					<!-- Your Profile  -->
					
					<div class="your-profile">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">个人中心</h6>
						</div>
					
						<div id="accordion" role="tablist" aria-multiselectable="true">
							<div class="card">
								<div class="card-header" role="tab" id="headingOne">
									<h6 class="mb-0">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											个人设置
											<svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
										</a>
									</h6>
								</div>
					
								<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
									<ul class="your-profile-menu">
										<li>
											<router-link to="/profile/info">个人信息</router-link>
										</li>
										<li>
											<router-link to="/profile/setting">账号设置</router-link>
										</li>
										<li>
											<router-link to="/profile/changepwd">修改密码</router-link>
										</li>
										<li>
											<router-link to="/profile/hobbies">兴趣爱好</router-link>
										</li>
										<li>
											<router-link to="/profile/education">教育/职业</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					
						<div class="ui-block-title">
							<router-link to="/profile/notification"  class="h6 title">通知</router-link>
							<a href="#" class="items-round-little bg-primary">8</a>
						</div>
						<div class="ui-block-title">
							<router-link to="/profile/chat" class="h6 title">聊天 / 信息</router-link>
						</div>
						<div class="ui-block-title">
							<router-link to="/profile/request" class="h6 title">好友请求</router-link>
							<a href="#" class="items-round-little bg-blue">4</a>
						</div>
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">收藏夹</h6>
						</div>
						<div class="ui-block-title">
							<a href="#" class="h6 title">创建收藏夹</a>
						</div>
						<div class="ui-block-title">
							<router-link to="/profile/fav-setting" class="h6 title">收藏设置</router-link>
						</div>
					</div>
					
					<!-- ... end Your Profile  -->
	
				</div>
			</div>
		</div>
	</div>
	
	<!-- ... end Your Account Personal Information -->
	
		<RestorePwd/>
		<ChatPopue/>
		<BackToTop/>
	</div>
</template>

<script>
	import Loading from './Loading.vue'
	import LeftSidebar from './sidebar/LeftSidebar'
	import RightSidebar from './sidebar/RightSidebar'
	//import TopSidebar from './sidebar/TopSidebar'
	//import TopResponsive from './sidebar/TopResponsive'
	
	import HeaderProfile from './container/HeaderProfile'
	import Content from './container/Content'
	
	import BackToTop from './windowPopup/BackToTop'
	import ChatPopue from './windowPopup/ChatPopue'
	import RestorePwd from './windowPopup/RestorePwd'
	
	import FriendRequest from './Profile/FriendRequest'
	
	
	export default {
	  components: {
	    Loading,LeftSidebar,RightSidebar,
		HeaderProfile,Content,RestorePwd,BackToTop,ChatPopue,FriendRequest
	  }
	}
</script>

<style>
</style>
