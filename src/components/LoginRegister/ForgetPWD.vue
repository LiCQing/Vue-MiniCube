<template>
	<!-- Window-popup Restore Password -->
	<div class="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true">
		<div class="modal-dialog window-popup restore-password-popup" role="document">
			<div class="modal-content">
				<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
					<svg class="olymp-close-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a>
	
				<div class="modal-header">
					<h6 class="title">找回密码</h6>
				</div>
	
				<div class="modal-body">
					<form  method="get">
						<p>输入邮箱/手机号，点击‘发送验证码’. 你会收到一个验证码. 请使用它来重置你的密码.
						</p>
						<div class="form-group label-floating">
							<label class="control-label">邮箱/手机号</label>
							<input class="form-control" placeholder="" type="email" value="james-spiegel@yourmail.com">
						</div>
						<button class="btn btn-purple btn-lg full-width">发送验证码</button>
						<div class="form-group label-floating">
							<label class="control-label">输入验证码</label>
							<input class="form-control" placeholder="" type="text" value="">
						</div>
						<div class="form-group label-floating">
							<label class="control-label">输入新密码</label>
							<input class="form-control" placeholder="" type="password" value="olympus">
						</div>
						<button class="btn btn-primary btn-lg full-width">修改密码</button>
					</form>
	
				</div>
			</div>
		</div>
	</div>
	
	<!-- ... end Window-popup Restore Password -->
</template>

<script>
</script>

<style>
</style>
