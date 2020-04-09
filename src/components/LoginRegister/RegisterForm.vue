<template>
		<div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
		<div class="title h6">注册属于你的账号</div>
		<form class="content">
			<div class="row">
				<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div class="form-group label-floating">
						<label class="control-label">昵称
							<span class="tips">{{nicktips}}</span>
						</label>
						<input v-model="user.nick" class="form-control" placeholder="" type="text">
					</div>
					
					<div class="form-group label-floating">
						<label class="control-label">手机 <span class="tips">{{phonetips}}</span></label>
						<input v-model="user.phone" class="form-control" placeholder="" type="text">
					</div>
					
					<div class="form-group label-floating">
						<label class="control-label">密码<span class="tips">{{pwdtips}}</span></label>
						<input v-model="user.password" class="form-control" placeholder="" type="password">
					</div>
					<div class="form-group label-floating">
						<label class="control-label">确认密码<span class="tips">{{confirm_pwdtips}}</span></label>
						<input v-model="confirm_pwd" class="form-control" placeholder="" type="password">
					</div>
					
<!-- 					<div class="remember">
						<div class="checkbox">
							<label>
								<input name="optionsCheckboxes" type="checkbox">
								I accept the <a href="#">Terms and Conditions</a> of the website
							</label>
						</div>
					</div> -->
					
					<a href="javaScript:void(0)" @click="submit" class="btn btn-purple btn-lg full-width">注册</a>
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
					 nick:"",
					 password:"",
					 phone:""
				 },
				 confirm_pwd:"",
				// nicktips:"",
				 //pwdtips:"",
				 //confirm_pwdtips:"",
				 needcheck:false,
				 needchecknick:false,
				 needcheckphone:false,
				 needcheckpwd:false,
				 needcheckcpwd:false,
				 
			}
		},
		computed:{
			nicktips(){
				if(!this.needchecknick && this.user.nick.length == 0){ return ""}
				if(this.user.nick.length < 6 || this.user.nick.length >18)
					return "请输入6-18个字符";
				return ""
			},
			phonetips(){
				if(!this.needcheckphone&& this.user.phone.length == 0){ return ""}
				if(this.user.phone.length < 11)
					return " 请输入正确手机号";
				return ""
			},
			pwdtips(){
				if(!this.needcheckpwd&& this.user.password.length == 0){ return ""}
				if(this.user.password.length < 6)
					return " 请输入6-15位密码";
				return ""
			},
			confirm_pwdtips(){
				if(!this.needcheckcpwd&& this.confirm_pwd == 0){ return ""}
				if(this.user.password != this.confirm_pwd)
					return " 两次密码输入不正确";
				return ""
			},
			
		},
		methods: {
			...mapActions(['register','check']),
			checkinput(){
				this.needchecknick = this.needcheckcpwd = this.needcheckphone = this.needcheckpwd = true
				var result = this.nicktips + this.phonetips + this.pwdtips + this.confirm_pwdtips
				return result == "";
			},
			submit() {
				if(!this.checkinput()){
					return 
				}
				var cphone = this.check("phone/" + this.user.phone)
						//检查手机号
						cphone.then((res)=>{
							  if(res.data.success){
										this.register(this.user)  //注册
									}else{
										this.$message.error({ message: "手机号已被使用", center: true, offset:300});
									}
						})
			}
		},
	}
	
	
</script>

<style scoped="scoped">
	.tips{
		color: red;
	}
</style>
