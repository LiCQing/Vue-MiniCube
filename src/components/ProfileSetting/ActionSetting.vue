<template>
	<div class="ui-block">
		<div class="ui-block-title">
			<h6 class="title">账号设置</h6>
		</div>
		<div class="ui-block-content">
	
			
			<!-- Personal Account Settings Form -->
			
			<form>
				<div class="row">
			
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="form-group label-floating is-select">
							<label class="control-label">谁可以添加我为好友</label>
							<select class="selectpicker form-control">
								<option value="EO">所有人</option>
								<option value="NO">禁止所有人</option>
							</select>
						</div>
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="form-group label-floating is-select">
							<label class="control-label">谁可以看我的动态</label>
							<select class="selectpicker form-control">
								<option value="US">仅朋友</option>
								<option value="EO">所有人</option>
							</select>
						</div>
					</div>
			
					<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="description-toggle">
							<div class="description-toggle-content">
								<div class="h6">通知提醒</div>
								<p>收到新通知时会产生提示音</p>
							</div>
			
							<div class="togglebutton">
								<label>
									<input type="checkbox" checked="">
								</label>
							</div>
						</div>
						<div class="description-toggle">
							<div class="description-toggle-content">
								<div class="h6">邮件通知</div>
								<p>当收到新通知时发送邮件</p>
							</div>
			
							<div class="togglebutton">
								<label>
									<input type="checkbox" checked="">
								</label>
							</div>
						</div>
						<div class="description-toggle">
							<div class="description-toggle-content">
								<div class="h6">生日提醒</div>
								<p>接收好友的生日通知信息并展示小卡片</p>
							</div>
			
							<div class="togglebutton">
								<label>
									<input type="checkbox" checked="">
								</label>
							</div>
						</div>
						<div class="description-toggle">
							<div class="description-toggle-content">
								<div class="h6">消息提醒</div>
								<p>当收到消息时产生提示音</p>
							</div>
			
							<div class="togglebutton">
								<label>
									<input type="checkbox" checked="">
								</label>
							</div>
						</div>
					</div>
			
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<button class="btn btn-secondary btn-lg full-width">恢复默认</button>
					</div>
					<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
						<button class="btn btn-primary btn-lg full-width">保存修改</button>
					</div>
				</div>
			</form>
			
			<!-- ... end Personal Account Settings Form  -->
	
		</div>
	</div>
			
</template>

<script>
	export default{
		mounted: function(){
			$('.selectpicker').selectpicker();
			$.material.init();
		}
	}
</script>

<style>
</style>
