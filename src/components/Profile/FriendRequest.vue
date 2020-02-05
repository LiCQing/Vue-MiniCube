<template>
		<div class="ui-block">
		<div class="ui-block-title">
			<h6 class="title">好友申请</h6>
			<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
		</div>
	
		
		<!-- Notification List Frien Requests -->
		
		<ul class="notification-list friend-requests">
			
			<FriendRequestItem/>
		
			<li class="accepted">
				<div class="author-thumb">
					<img src="static/img/avatar17-sm.jpg" alt="author">
				</div>
				<div class="notification-event">
					You and <a href="#" class="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" class="notification-link">his wall</a>.
				</div>
				<span class="notification-icon">
					<svg class="olymp-happy-face-icon">
						<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					</span>
				<div class="more">
					<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
					<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
				</div>
			</li>
		
			
		</ul>
		
		<!-- ... end Notification List Frien Requests -->
	</div>
	
</template>

<script>
	
	import FriendRequestItem from '../Friend/FriendRequestItem'
	

	
	export default {
	  components: {
	     FriendRequestItem
	  }
	}
	
</script>

<style>
</style>
