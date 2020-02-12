<template>
	<div>
				<!-- ... end Comments -->
		<a href="javaScript:void(0)" class="more-comments">查看更多评论 <span>+</span></a>
		
		<!-- Comment Form  -->
		
		<form class="comment-form inline-items">
		
			<div class="post__author author vcard inline-items">
				<img src="static/img/author-page.jpg" alt="author">
		
				<div class="form-group with-icon-right ">
					<textarea class="form-control" placeholder=""></textarea>
					<div class="add-options-message">
						<a href="javaScript:void(0)" class="options-message" data-toggle="modal" data-target="#update-header-photo">
							<svg class="olymp-camera-icon">
								<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
		
			<button class="btn btn-md-2 btn-primary">发表评论</button>
		
			<button class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">取消</button>
		
		</form>
		
		<!-- ... end Comment Form  -->		
	</div>
</template>

<script>
</script>

<style>
</style>
