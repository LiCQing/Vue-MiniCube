<!-- 登陆页面 -->
<template>
	<div class="landing-page">

	<div class="content-bg-wrap"></div>
	
	<Header/>
	
	<div class="header-spacer--standard"></div>
	
	<div class="container">
		<div class="row display-flex">
			<div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
				<div class="landing-content">
					<h1>一阶魔方 发现你的每一面</h1>
					<p>还原即为打散，打散亦是还原，形形色色的世界，不如回归最纯粹的自己，
					</p>
					<a href="#" class="btn btn-md btn-border c-white">JOIN US！</a>
				</div>
			</div>
	
			<div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
				
				<!-- Login-Registration Form  -->
				
				<div class="registration-login-form">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#home" role="tab">
								<svg class="olymp-login-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-login-icon"></use></svg>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#profile" role="tab">
								<svg class="olymp-register-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-register-icon"></use></svg>
							</a>
						</li>
					</ul>
				
					<!-- Tab panes -->
					<div class="tab-content">
							<LoginForm/>
							<RegisterForm/>
					</div>
				</div>
				
				<!-- ... end Login-Registration Form  -->		</div>
		</div>
	</div>
	
	
	<!--zhaohuimima -->
	<ForgetPWD/>
	
	<!-- Window Popup Main Search -->
	<div class="modal fade" id="main-popup-search" tabindex="-1" role="dialog" aria-labelledby="main-popup-search" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
			<div class="modal-content">
				<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
					<svg class="olymp-close-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a>
				<div class="modal-body">
					<form class="form-inline search-form" method="post">
						<div class="form-group label-floating">
							<label class="control-label">What are you looking for?</label>
							<input class="form-control bg-white" placeholder="" type="text" value="">
						</div>
	
						<button class="btn btn-purple btn-lg">SeCarch</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- ... end Window Popup Main Search -->
	</div>
</template>

<script>
	import Header from './LoginRegister/Header'
	import LoginForm from './LoginRegister/LoginForm'
	import RegisterForm from './LoginRegister/RegisterForm'
	import ForgetPWD from './LoginRegister/ForgetPWD'
	export default {
	  components: {
	    Header,LoginForm,RegisterForm,ForgetPWD
	  }
	}
</script>

<style>
</style>
