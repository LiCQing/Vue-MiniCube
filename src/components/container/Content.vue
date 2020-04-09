<template>
	<div class="container">
		<div class="row">
	
			<mainContent :home='home'/>
	
			<!-- Left Sidebar -->
	
			<div v-show="true" class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
				

				
				<div class="ui-block">
					<div class="ui-block-title">
						<h6 class="title">近期视频</h6>
					</div>
					<div class="ui-block-content">
	
						<!-- W-Latest-Video -->
						
						<ul v-if="videos.length" class="widget w-last-video">
							<li v-show="false">
								<a href="http://121.43.230.40/img/c5e2648f2f28b9b48a2157e83da238c9.mp4.jpg" class="play-video play-video--small">
									<svg class="olymp-play-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
									</svg>
								</a>
								<img src="static/img/video8.jpg" alt="video">
								<div class="video-content">
									<div class="title">System of a Revenge - Hypnotize...</div>
									<time class="published" datetime="2017-03-24T18:18">3:25</time>
								</div>
								<div class="overlay"></div>
							</li>
							
							<li v-for="(video,index) in videos" :key="index" >
								<a :href="video" class="play-video play-video--small">
									<svg class="olymp-play-icon">
										<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
									</svg>
								</a>
								<img :src="video + '.jpg'" alt="video">
								<div class="video-content">
									<div class="title">System of a Revenge - Hypnotize...</div>
									<time class="published" datetime="2017-03-24T18:18">3:25</time>
								</div>
								<div class="overlay"></div>
							</li>
						</ul>
						
						<div v-else class="content-null">
							<img src="../../assets/null.png" />
							<div>什么也没有……</div>
						</div>
						
						<!-- .. end W-Latest-Video -->
					</div>
				</div>
				
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">广告位招租</h6>
						</div>
						<div class="ui-block-content">
				
						</div>
					</div>
					
						<div class="ui-block">
							<div class="ui-block-title">
								<h6 class="title">热门</h6>
							</div>
							<div class="ui-block-content">
					
							</div>
						</div>
	
			</div>
	
			<!-- ... end Left Sidebar -->
	
	
			<!-- Right Sidebar -->
	
			<div v-show="true"  class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
	
				<div class="ui-block">
					<div class="ui-block-title">
						<h6 class="title">近期相片</h6>
					</div>
					<div class="ui-block-content">
	
						<!-- W-Latest-Photo -->
						
						<ul v-if="imgs.length" class="widget w-last-photo js-zoom-gallery">
							<li v-for="(img,index) in imgs" :key = "index">
								<a :href="img">
									<img :src="img" alt="photo">
								</a>
							</li>
						</ul>
						<div v-else class="content-null">
							<img src="../../assets/null.png" />
							<div>什么也没有……</div>
						</div>
						
						<!-- .. end W-Latest-Photo -->
					</div>
				</div>
	
			
	

	
			</div>
	
			<!-- ... end Right Sidebar -->
	
		</div>
	</div>
	
</template>

<script>
	import mainContent from './mainComponent/mainContent'
	import {mapGetters} from 'vuex'
	export default {
		props:['home'],
	  components: {
			mainContent
	  },
		computed:{
			...mapGetters(['me']),
		},
		data(){
			return {
				imgs:[],
				videos:[]
			}
		},
		mounted(){
			let uid = this.me.id;
			if(this.$router.currentRoute.query.uid){
				 uid = this.$router.currentRoute.query.uid
			}
			
			this.request.getListOfImg(uid).then(res=>{
				 let result =  res.data.data
				 result.forEach(item=>{
					  item.blog_imgs.split("|").forEach(img=>{
							this.imgs.push(this.util.VAR().imgurl + img)
						})
				 })
				 setTimeout(()=>{
					 CRUMINA.mediaPopups();
				 },500)
			})
			
			this.request.getListOfVideo(uid).then(res=>{
				let result =  res.data.data
				result.forEach(item=>{
					this.videos.push(	this.util.VAR().imgurl + item.blog_video )
				})
				setTimeout(()=>{
					CRUMINA.mediaPopups();
				},500)
			})
			
		//CRUMINA.mediaPopups();
		}
	}
</script>

<style>
</style>
