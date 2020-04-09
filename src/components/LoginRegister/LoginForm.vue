<template>
	<div class="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
			<div class="title h6">登陆发现更多精彩</div>
			<form class="content">
				<div class="row">
					<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<div class="form-group label-floating">
							<label class="control-label">手机</label>
							<input v-model="user.name"  class="form-control" placeholder="" type="phone">
						</div>
						<div class="form-group label-floating">
							<label class="control-label">密码</label>
							<input v-model="user.pwd" class="form-control" placeholder="" type="password">
						</div>
					
						<div class="remember">
					
					<!-- 		<div class="checkbox">
								<label>
									<input name="optionsCheckboxes" type="checkbox">
									记住我
								</label>
							</div> -->
							<a href="#" class="forgot" data-toggle="modal" data-target="#restore-password">找回密码</a>
						</div>
					
						<a href="javaScript:void(0);"  @click="onSubmit" class="btn btn-lg btn-primary full-width">登陆</a>
					
				<!-- 		<div class="or"></div> -->
					
			<!-- 			<a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>QQ登陆</a>
					
						<a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>微信登陆</a>
					 -->
					
						<p>还没有账号? <a href="#home">赶快注册一个吧!</a> 0秒急速注册，登陆享受更多精彩!</p>
					</div>
				</div>
			</form>
		</div>
	
</template>

<script>
import {mapActions} from 'vuex'

export default {
		data() {
			return {
				user:{
					name:"test",
					pwd:"123456"
				}
			}
		},
		methods: {
			...mapActions(['login']),
			onSubmit() {
				this.login(this.user)
				//this.$router.push('/personalIndex')
			}
		}
	}
</script>

<style>
</style>
