<template>
	<li>
		<div class="author-thumb">
			<img :src="util.VAR().imgurl + notice.cover" alt="author" class="avatar">
		</div>
		<div class="notification-event">
			<a href="#" class="h6 notification-friend">{{notice.operateUserNick}}</a> 
			{{notice.operateType}} 
			<a href="javaScript:void(0)" class="notification-link" v-html="notice.beOpContent"> </a>
			<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">{{util.getTimeOfSpace(notice.time)}}</time></span>
		</div>
	<!-- 	<span class="notification-icon">
			<svg class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
		</span> -->
		
		<!-- <div class="comment-photo">
			<img src="static/img/comment-photo.jpg" alt="photo">
			<span>“She looks incredible in that outfit! We should see each...”</span>
		</div> -->
				
		<div class="more">
			<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
			<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
		</div>
	</li>
</template>

<script>
	export default{
		props:['notice'],
	 
	}
</script>

<style>
</style>
