<template>
		<div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
		<div class="title h6">注册属于你的账号</div>
		<form class="content">
			<div class="row">
				<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div class="form-group label-floating">
						<label class="control-label">昵称</label>
						<input v-model="user.username" class="form-control" placeholder="" type="text">
					</div>
					
					<div class="form-group label-floating">
						<label class="control-label">手机</label>
						<input v-model="user.phone" class="form-control" placeholder="" type="text">
					</div>
					
					<div class="form-group label-floating">
						<label class="control-label">密码</label>
						<input v-model="user.password" class="form-control" placeholder="" type="password">
					</div>
					<div class="form-group label-floating">
						<label class="control-label">确认密码</label>
						<input v-model="confirm_pwd" class="form-control" placeholder="" type="password">
					</div>
					
		<!-- 			<div class="form-group date-time-picker label-floating">
						<label class="control-label">生日</label>
						<input name="datetimepicker" value="10/24/1984" />
						<span class="input-group-addon">
										<svg class="olymp-calendar-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
									</span>
					</div> -->
					
				<!-- 	<div class="form-group label-floating is-select">
						<label class="control-label">性别</label>
						<select class="selectpicker form-control">
							<option value="MA">Boy</option>
							<option value="FE">Girl</option>
						</select>
					</div> -->
					
					<div class="remember">
						<div class="checkbox">
							<label>
								<input name="optionsCheckboxes" type="checkbox">
								I accept the <a href="#">Terms and Conditions</a> of the website
							</label>
						</div>
					</div>
					
					<a href="javaScript:void(0)" @click="submit" class="btn btn-purple btn-lg full-width">Complete Registration!</a>
				</div>
			</div>
		</form>
	</div>
					
</template>

<script>
	
	import {mapActions} from 'vuex'
	
	export default{
		data(){
			return {
				 user:{
					 username:"",
					 password:"",
					 phone:""
				 },
				 confirm_pwd:""
			}
		},
		methods: {
			...mapActions(['register','check']),
			submit() {
				if(this.user.password != this.confirm_pwd){
					this.$message.error({ message: "密码输入不一致", center: true, offset:300});
					return ;
				}
				
				var cname = this.check("name/" + this.user.username)
				var cphone = this.check("phone/" + this.user.phone)
				//检查用户名
				cname.then((res)=>{
					if(res.data.success){
						//检查手机号
						cphone.then((res)=>{
							  if(res.data.success){
										this.register(this.user)  //注册
									}else{
										this.$message.error({ message: "手机号已被使用", center: true, offset:300});
									}
						})
						
					}else{
						this.$message.error({ message: "用户名已被使用", center: true, offset:300});
					}
				})
				
			
				
				
				
				
				//
				//console.log(this.user)
			}
		},
	}
	
	
</script>

<style>
</style>
