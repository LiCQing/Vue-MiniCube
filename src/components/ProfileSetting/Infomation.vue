<template>
		<div class="ui-block">
		<div class="ui-block-title">
			<h6 class="title">个人信息</h6>
		</div>
		<div class="ui-block-content">
		
			
			<!-- Personal Information Form  -->
			
			<form>
				<div class="row">
			
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="form-group label-floating">
							<label class="control-label">用户名</label>
							<input class="form-control" placeholder="" readonly="true" type="text" :value="me.username">
						</div>
			
					<!-- 	<div class="form-group label-floating">
							<label class="control-label">邮箱</label>
							<input class="form-control" placeholder="" type="email" value="jspiegel@yourmail.com">
						</div> -->
			
						<div class="form-group date-time-picker label-floating">
							<label class="control-label">生日</label>
							<input name="datetimepicker" v-model="birthday"  />
							<span class="input-group-addon">
								<svg class="olymp-month-calendar-icon icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-month-calendar-icon"></use></svg>
							</span>
						</div>
					</div>
			
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="form-group label-floating " :class = "nick?'':'is-empty'">
							<label class="control-label">昵称</label>
							<input class="form-control" placeholder="" v-model="nick" type="text">
						</div>
			
					<!-- 	<div class="form-group label-floating">
							<label class="control-label">社交主页</label>
							<input class="form-control" placeholder="" type="email" value="daydreamzagency.com">
						</div> -->
			
			
						<div class="form-group label-floating " :class = "phone?'':'is-empty'">
							<label class="control-label">手机号</label>
							<input v-model="phone" class="form-control" placeholder="" type="text">
						</div>
					</div>
			
					<div class="col col-lg-4 col-md-4 col-sm-12 col-12">
						<div class="form-group label-floating is-select">
							<label class="control-label">国籍</label>
							<select class="selectpicker form-control">
								<option value="US">中国</option>
								<option value="AU">美国</option>
								<option value="AU">英国</option>
							</select>
						</div>
					</div>
					<div class="col col-lg-4 col-md-4 col-sm-12 col-12">
						<div class="form-group label-floating is-select">
							<label class="control-label">省份</label>
							<select class="selectpicker form-control">
								<option value="CA">北京</option>
								<option value="TE">上海</option>
							</select>
						</div>
					</div>
					<div class="col col-lg-4 col-md-4 col-sm-12 col-12">
						<div class="form-group label-floating is-select">
							<label class="control-label">城市</label>
							<select class="selectpicker form-control">
								<option value="SF">长沙</option>
								<option value="NY">广州</option>
							</select>
						</div>
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="form-group label-floating">
							<label class="control-label">个人描述</label>
							<textarea class="form-control" placeholder="">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56</textarea>
						</div>
			
			
				<!-- 		<div class="form-group label-floating is-empty">
							<label class="control-label">宗教信仰</label>
							<input class="form-control" placeholder="" type="text">
						</div> -->
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<!-- <div class="form-group label-floating is-empty">
							<label class="control-label">出生地点</label>
							<input class="form-control" placeholder="" type="text">
						</div> -->
			
						<div class="form-group label-floating">
							<label class="control-label">职业</label>
							<input class="form-control" placeholder="" type="text" value="UI/UX Designer">
						</div>
						
						<div class="form-group label-floating is-select">
							<label class="control-label">性别</label>
							<select v-model="gender" class="selectpicker form-control">
								<option value="0">保密</option>
								<option value="1">男</option>
								<option value="2">女</option>
							</select>
						</div>
			
					<!-- 	<div class="form-group label-floating is-select">
							<label class="control-label">Status</label>
							<select class="selectpicker form-control">
								<option value="MA">Married</option>
								<option value="FE">Not Married</option>
							</select>
						</div> -->
			
				<!-- 		<div class="form-group label-floating">
							<label class="control-label">Political Incline</label>
							<input class="form-control" placeholder="" type="text" value="Democrat">
						</div> -->
					</div>
					<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="form-group with-icon label-floating">
							<label class="control-label">FaceBook账号</label>
							<input class="form-control" type="text" value="www.facebook.com/james-spiegel95321">
							<i class="fab fa-facebook-f c-facebook" aria-hidden="true"></i>
						</div>
					
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12 ">
						<button type="button" class="btn btn-secondary btn-lg full-width">重置</button>
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<button  type="button" @click="submit_update" class="btn btn-primary btn-lg full-width">保存修改</button>
					</div>
			
				</div>
			</form>
			
			<!-- ... end Personal Information Form  -->
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import util from '../../common'
	import req from '../../axios'
	
	export default{
		data() {
			return {
				nick:"",	
				phone:"",
				gender:"",
				birthday:"",
			}
		},
		computed: {
			...mapGetters(['me']),
			name() {
				return  util.today()
			}
		},
		methods: {
			submit_update() {
				var user ={
					id:this.me.id,
					nick:this.nick,	
					phone:this.phone,
					gender:this.gender,
					birthday:this.birthday,
				}
				
			    req.update_info(user)
				 
			}
		},
		mounted(){
			//js > libs-init > libs-init.js 28行
			CRUMINA.Bootstrap();
			this.nick = this.me.nick||this.me.username
			this.phone = this.me.phone
			this.gender = this.me.gender || 0
			this.birthday = util.getDateOfNum(this.me.birthday) || util.today()
		}
	}
	
</script>

<style>
</style>
