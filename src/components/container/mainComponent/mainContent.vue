<template>
		<!-- Main Content -->
		
	<div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
		
		<PublishForm v-if="home"/>
		
		<div v-if="blog_list.length" id="newsfeed-items-grid">
			<BlogItem v-for="(blog,key) in blog_list" :blog="blog" :index="key" :key="key"/>
		</div>
		
		<div v-else class="content-null">
			<img src="../../../assets/null.png" />
			<h2>空空如也</h2>
		</div>
		
		
		<a v-show="page.hasNext" @click.stop="loadmore" id="load-more-button" href="javaScript:void(0);" class="btn btn-control btn-more">
			<svg class="olymp-three-dots-icon">
				<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
			</svg>
		</a>
	
	</div>
		
	<!-- ... end Main Content -->
</template>

<script>
	import BlogItem from './blogMain/BlogItem'
	import PublishForm from './blogMain/PublishForm'
	import common from '../../../common'
	
	import req from '../../../axios'
	import {mapGetters} from 'vuex'
	export default {
		props:['home'],
	  components: {
		BlogItem,PublishForm
	  },
	  data(){
		  return{
			  images:[
				  {src:"static/img/post-photo6.jpg"},
			  ],
				blog_list:[],
				page:{
					current:1,
					number:10,
					total:0,
					hasPre:false,
					hasNext:true,
					data:{}
				},
				
		  }
	  },
	  methods : {
		  count(){
			  console.log(this.images.length)
		  },
			loadmore(){
				//重新获取数据追加在后面
				this.page.data = {}
				this.page.current =  this.page.current + 1
				req.getBlogListOfFriend(this.page).then((res)=>{
					if(res.data.success){
						this.page = res.data.data
						var list = this.page.data;
						if(list)
								this.blog_list.push.apply(this.blog_list,list)
						}
				})
			},
			init(){
				var that = this
				
				if(!this.home){
					//获取某一个人的博客
					var uid = this.$router.currentRoute.query.uid
					req.getBlogOfSomeOne(uid).then(res=>{
						//console.log(res)
							var list = res.data.data;
							if(list)
									that.blog_list = list
					})
					
				}else{
					//获取好友的博客
					req.getBlogListOfFriend(this.page).then((res)=>{
						if(res.data.success){
							this.page = res.data.data
							var list = this.page.data;
							if(list)
									that.blog_list = list
							}
					})
					
				}
			}
	  },
	  computed :{
				...mapGetters(['me']),
				
	 },
	  mounted(){
			 
				this.init()
				
			 
			 PubSub.subscribe("publish_blog",  (msg,blog) =>{
				 //调用api保存到后台
				  req.publish_blog(blog).then(res=>{
						 let newBlog = res.data.data
						 newBlog.sender = this.me
						 newBlog.likeCount = 0
						 newBlog.repeatCount=0
						 newBlog.commentCount=0
						 this.blog_list.unshift(newBlog)
						 common.alertSuccessMsg("发布成功")
						 //this.init()
					})
				 
			 })
			 
			 PubSub.subscribe("del_blog",  (msg,param) =>{
			 	//调用api保存到后台
			 	req.del_blog(param.id).then(res=>{
			 			this.blog_list.splice(param.index,1)
			 			common.alertSuccessMsg("删除成功")
			 	})
			 	
			 })
		},
		beforeDestroy(){
			 PubSub.unsubscribe("publish_blog")
			 PubSub.unsubscribe("del_blog")

		}
	}
</script>

<style scope>
	.img3{
		padding : 3px;
	}
	
	.img3 img{
		border-radius:5px;
		cursor: pointer;
		transition: all 0.1s;
	}
	
/* 	.img3 :hover{
		transform: scale(1.1);
	} */
	
	
</style>
