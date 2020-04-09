<template>
	<div>
		<top-sidebar/>
		
		<div class="header-spacer"></div>
		
		<div class="container"  v-loading="!ready">
			<div class="row">
				<div class="col col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="clients-grid" >
						<ul class="cat-list-bg-style align-center sorting-menu">
							<li class="cat-list__item active" data-filter="*"><a href="#" class="">综合广场</a></li>
							<li class="cat-list__item" data-filter=".video"><a href="#" class="">视频广场</a></li>
							<li class="cat-list__item" data-filter=".picture"><a href="#" class="">图片广场</a></li>
							<li class="cat-list__item" data-filter=".recom"><a href="#" class="">推荐</a></li>
							<li class="cat-list__item" data-filter=".hot"><a href="#" class="">热门</a></li>
							<li class="cat-list__item" data-filter=".tag"><a href="#" class="">标签</a></li>
						</ul>
						<div class="row sorting-container" id="clients-grid-1" data-layout="masonry">

							<!-- <div ref="a" @click="get" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item recom picture">
								 <BlogItem/>
							</div> -->
							
							<div v-for="blog in hotblog"  :class="blog.blogImgs?'picture':blog.blogVideo?'video':''" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item">
									<BlogItem :blog="blog" :toblank='true' />
							</div>
 
						</div>

					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import BlogItem from './container/mainComponent/blogMain/BlogItem'
	//import TopSidebar from './sidebar/TopSidebar'
	export default {
	  components: {
		BlogItem
	  },
		data(){
			return {
				hotblog:[],
				ready:false
			}
		},
	  methods : {
		  get(e){
			 /* console.log(e)
			  var refs = this.$refs
			  for(var key in refs){
				  console.log(refs[key])
				  if(refs[key].style.cssText.indexOf("left: 50%;")!=-1){
					     console.log(refs[key].style.top)
				  }
			  } */
			//this.$refs.a.style.cssText
		  }
	  },
		created(){
			this.request.getHotBlog("day").then(res=>{
					this.hotblog = res.data.data
					setTimeout(()=>{
						this.ready = true
						CRUMINA.IsotopeSort() //js/libs-init/libs-init.js
					},1000)
						 
			})
			
		},
		mounted(){

				// let imgArr = ['i.jpg', 'o.jpg', 'q.jpeg'];
				// let imgArr = ['i.jpg', 'o.jpg'];
				// let imgArr = ['i.jpg'];
			/* 	new Swiper({
					imgArr: imgArr,
					imgWidth: 320,
					aniTime: 1000,
					intervalTime: 1500,
					scale: 0.8,
					autoplay: false,
					gap: 0,
			      	clsSuffix: '-card'
				}).init();
			
			
				new Swiper({
					imgArr: imgArr,
					imgWidth: 320,
					aniTime: 1000,
					intervalTime: 1500,
					scale: 0.8,
					autoplay: false,
					gap: -200,
			      	clsSuffix: '-stack'
				}).init(); */
		}
	}
</script>

<style scoped="scoped">
	
	
</style>
