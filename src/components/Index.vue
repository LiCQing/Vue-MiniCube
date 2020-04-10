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
							<li class="cat-list__item" data-filter=".day"><a href="#" class="">今日热门</a></li>
							<li class="cat-list__item" data-filter=".week"><a href="#" class="">本周热门</a></li>
							<li class="cat-list__item"  data-filter=".month"><a href="#" class="">本月热门</a></li>
						</ul>
						<div class="row sorting-container" id="clients-grid-1" data-layout="masonry">

							<!-- <div ref="a" @click="get" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item recom picture">
								 <BlogItem/>
							</div> -->
							
							<div v-for="blog in hotblog"  :class="itemclass(blog)" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item">
									<BlogItem :blog="blog" :toblank='true' />
							</div>
							
							<div v-if="!dayNum" class="hot-null day sorting-item col-md-12">
								<img src="../assets/null.png" alt="">
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
				ready:false,
				dayNum:0,
				weekNum:0,
				monthNum:0
			}
		},
		computed:{
			
		},
	  methods : {
		  itemclass(blog){
			return (blog.blogImgs?'picture':blog.blogVideo?'video':'') + " " + blog.hot
		  },
		  addBlog(blog){
			  let flag = true
			  this.hotblog.some(item=>{
				  if(item.blogId == blog.blogId){ item.hot += " " + blog.hot;  flag = false;  return true;  }
			  })
			  if(flag)
				this.hotblog.push(blog)
		  },
		  init(){
			  var  start = new Date().getTime()
			  this.ready = false
			  var postArr = []
			  postArr.push(this.request.getHotBlog("day"))
			  postArr.push(this.request.getHotBlog("week"))
			  postArr.push(this.request.getHotBlog("month"))
			  Promise.all(postArr).then(arr=>{
				 arr.forEach(res=>{
					 if(res.config.url.indexOf("day") != -1){
						 res.data.data.forEach(item=>{
						 	item.hot = "day"
							this.dayNum++
						 	this.addBlog(item)
						 })
					 }else  if(res.config.url.indexOf("week") != -1){
						 res.data.data.forEach(item=>{
						 	item.hot = "week"
							this.weekNum++
						 	this.addBlog(item)
						 })
					 }else{
						 res.data.data.forEach(item=>{
						 	item.hot = "month"
							this.monthNum++
						 	this.addBlog(item)
						 })
					 }
				 })
				 
				 setTimeout(()=>{
				 	CRUMINA.IsotopeSort() //js/libs-init/libs-init.js
				 },1000)
				 this.ready = true
				 console.log(new Date().getTime() - start + " spend")
			  })
		/* 	  this.request.getHotBlog("day").then(res=>{
			  		res.data.data.forEach(item=>{
						item.hot = "day"
						this.hotblog.push(item)
					})
			    this.request.getHotBlog("week").then(res=>{
			    	res.data.data.forEach(item=>{
			    		item.hot = "week"
			    		this.hotblog.push(item)
			    	})
					
					this.request.getHotBlog("month").then(res=>{
						res.data.data.forEach(item=>{
							item.hot = "month"
							this.hotblog.push(item)
						})
						setTimeout(()=>{
							this.ready = true
							CRUMINA.IsotopeSort() //js/libs-init/libs-init.js
						},1000)
			  		
					})
				})
			}) */
		}
		  
	  },
		created(){
			/* this.request.getHotBlog("day").then(res=>{
					this.hotblog = res.data.data
					setTimeout(()=>{
						this.ready = true
						CRUMINA.IsotopeSort() //js/libs-init/libs-init.js
					},1000)
						 
			}) */
			
		},
		mounted(){
			this.init()
		}
	}
</script>

<style scoped="scoped">
	
	.hot-null{
		text-align: center;
	}
	
</style>
