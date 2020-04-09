<template>
<!-- Top Header-Profile -->

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block" v-if="user">
				<div class="top-header">
					<div class="top-header-thumb">
						<img src="/static/img/top-header2.jpg" alt="nature">
					</div>
					<div class="profile-section">
						<div class="row">
							<div class="col col-lg-5 col-md-5 col-sm-12 col-12">
								<ul class="profile-menu">
									<li>
										<router-link to="/personalIndex/timeline" class="active">时间轴</router-link>
									</li>
									<li>
										<a href="javaScript:void(0)">About</a>
									</li>
									<li>
										<router-link to="/personalIndex/friend">我的好友</router-link>
									</li>
								</ul>
							</div>
							<div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
								<ul class="profile-menu">
									<li>
										<a href="javaScript:void(0)">照片墙</a>
									</li>
									<li>
										<a href="javaScript:void(0)">视频墙</a>
									</li>
									<li>
										<div class="more">
											<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
											<ul class="more-dropdown more-with-triangle">
												<li>
													<a href="#">Report Profile</a>
												</li>
												<li>
													<a href="#">Block Profile</a>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div class="control-block-button">
							<router-link to="/profile/request" class="btn btn-control bg-blue">
								<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
							</router-link>

							<a href="#" class="btn btn-control bg-purple">
								<svg class="olymp-chat---messages-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
							</a>

						<!-- 	<div class="btn btn-control bg-primary more">
								<svg class="olymp-settings-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>

								<ul class="more-dropdown more-with-triangle triangle-bottom-right">
									<li>
										<a href="#" data-toggle="modal" data-target="#update-header-photo">修该背景</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#update-header-photo">修改头像</a>
									</li>
									<li>
										<router-link to="/profile/setting">账号设置</router-link>
									</li>
								</ul>
							</div> -->
						</div>
					</div>
					<div class="top-header-author">
						<router-link to="/profile" class="author-thumb">
							<img :src="util.VAR().imgurl + user.cover" alt="author"  class="avatar-big">
						</router-link>
						<div class="author-content">
							<a href="javaScript:void(0)" class="h4 author-name">{{user.nick||user.username}}</a>
							<div class="country">湖南</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- ... end Top Header-Profile -->
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		
		data(){
			return {
				user:null
			}
		},
		computed:{
			...mapGetters(['me'])
		},
		created(){
			var uid = this.$router.currentRoute.query.uid
			this.request.getUserInfo(uid).then(res=>{
				if(res.data){
					this.user = res.data
				}
			})
		}
		
	}
	
</script>

<style>
</style>
