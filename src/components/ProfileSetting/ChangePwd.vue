<template>
		<div class="ui-block">
			<div class="ui-block-title">
				<h6 class="title">Change Password</h6>
			</div>
			<div class="ui-block-content">
	
				
				<!-- Change Password Form -->
				
				<form>
					<div class="row">
				
						<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="form-group label-floating">
								<label class="control-label">当前密码</label>
								<input class="form-control" placeholder="" type="password" value="Olympus-2017">
							</div>
						</div>
				
						<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
							<div class="form-group label-floating is-empty">
								<label class="control-label">新密码</label>
								<input class="form-control" placeholder="" type="password">
							</div>
						</div>
						<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
							<div class="form-group label-floating is-empty">
								<label class="control-label">确认密码</label>
								<input class="form-control" placeholder="" type="password">
							</div>
						</div>
				
						<div class="col col-lg-12 col-sm-12 col-sm-12 col-12">
							<div class="remember">
				
							<!-- 	<div class="checkbox">
									<label>
										<input name="optionsCheckboxes" type="checkbox">
										Remember Me
									</label>
								</div> -->
				
								<a href="#" class="forgot" data-toggle="modal" data-target="#restore-password">忘记密码</a>
							</div>
						</div>
				
						<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<button type="button" @click="check_pwd" class="btn btn-primary btn-lg full-width">确认修改</button>
						</div>
				
					</div>
				</form>
				
				<!-- ... end Change Password Form -->
			</div>
		</div>
	
</template>

<script>
	import req from "../../axios"
	import {mapGetters} from 'vuex'
	export default{
		data() {
			return {
				oldPwd: "",
				newPwd:""
			}
		},
		methods: {
			async check_pwd() {
				var user={
					id:this.me.id,
					password:this.oldPwd
					
				}
			 const {data} = await req.check_pwd(user)
			 console.log(data)
			}
		},
		computed: {
			...mapGetters(['me'])
		},
		
	}
</script>

<style>
</style>
