<template>
	<li class="comment-item has-children">
		<div class="post__author author vcard inline-items">
			<img src="static/img/avatar5-sm.jpg" alt="author">
					
			<div class="author-date">
				<a class="h6 post__author-name fn" href="#">村花小美</a>
				<div class="post__date">
					<time class="published" datetime="2017-03-24T18:18">
						1 小时前
					</time>
				</div>
			</div>
					
			<a href="#" class="more">
				<svg class="olymp-three-dots-icon">
					<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
				</svg>
			</a>
					
		</div>
					
		<p>爬
		</p>
					
		<a href="#" class="post-add-icon inline-items">
			<svg class="olymp-heart-icon">
				<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
			</svg>
			<span>5</span>
		</a>
		<a href="#" class="reply">回复</a>
					
		<ul v-if="hasChildren" class="children">
			<comment />
		</ul>
					
	</li>
					
</template>
	
<script>
	
	export default {
		name:"comment",
		data(){
			return {
				hasChildren:false
			}
		}
	}
</script>

<style>
</style>
