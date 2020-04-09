<template>
	<div class="post-video">
		<!-- <div class="video-thumb">
			<img src="static/img/video-youtube1.jpg" alt="photo">
			<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
				<svg class="olymp-play-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg>
			</a>
		</div> -->
		<!-- <video :src="url" controls="controls" ></video> -->							
		<!-- <div class="video-content">
			<a href="javaScript:void(0)" class="h4 title">Iron Maid - ChillGroves</a>
				<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua...
				</p>
			<a href="javaScript:void(0)" class="link-site">YOUTUBE.COM</a>
		</div> -->
		<div class="video-thumb">
			<img :src="url + '.jpg'" alt="photo">
			<a :href="url" class="play-video">
				<svg class="olymp-play-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg>
			</a>
		</div>
<!-- 		
		<div class="video-content">
			<a href="#" class="h4 title">Iron Maid - ChillGroves</a>
			<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua...
			</p>
			<a href="#" class="link-site">YOUTUBE.COM</a>
		</div> -->
	</div>
									
</template>

<script>
	import util  from '../../../../common'
	export default {
		props:['videourl'],
		data() {
			return { }
			},
		computed: {
			url: function(){
 					return util.VAR().imgurl + this.videourl 
			}
		},
		mounted(){
			CRUMINA.mediaPopups();
		}
		}
</script>

<style scoped="scoped">
	.post-video .video-thumb {
		max-height: 350px;
		margin: auto;
	}
	
	.post-video .video-thumb img{
		object-fit:inherit;
	}
</style>
