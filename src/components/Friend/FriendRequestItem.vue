<template>
		<li :class="isHandler">
			<div class="author-thumb">
				<img src="static/img/avatar16-sm.jpg" alt="author">
			</div>
			<div class="notification-event">
				<a href="#" class="h6 notification-friend">小一</a>
				<span class="chat-message-item">4个共同好友</span>
			</div>
			<span class="notification-icon">
				<a   href="#" class="accept-request">
					<span class="icon-add without-text">
						<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					</span>
				</a>
				
				<a   href="#" class="accept-request request-del">
					<span class="icon-minus">
						<svg class="olymp-happy-face-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
					</span>
				</a>
			
			</span>
	
			<div class="more">
				<svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
				<svg class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
			</div>
		</li>
				
</template>

<script>
	
	export default{
		data(){
			return {
				isHandler:"accepted"
			}
		}
	}
	
</script>

<style>
</style>
