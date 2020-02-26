<template>
	<div class="ui-block">
		
		<!-- News Feed Form  -->
		
		<div class="news-feed-form">
			<!-- Nav tabs -->	
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
					<form>
						<div class="author-thumb">
							<img :src="me.cover" alt="author">
						</div>
						<div class="form-group with-icon label-floating is-empty">
					<!-- 		<textarea  v-model="share_content"  class="form-control" placeholder=""></textarea>
							 -->
					 		<div @keydown="input" ref="inputdiv"  class="form-control" contentEditable="true" style="height: 110px;padding: 5px; margin-left: 70px">
								 <!-- 输入区 -->
							</div> 
							
						</div>
						
						<!-- 展示 -->
						
						<div v-show="hasImg" class="img-display">
							  <div class="img-item"  v-for="(img,index) in imgs" :index="index">
								  <img :src="img"  />
								  <svg @click="remove(index)" class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
							  </div>
						</div>
						
						<div v-show="hasVideo" class="video-display">
							<video id="video" controls="controls" :src="video_url" webkit-playsinline preload="auto"></video>
							<svg @click="removeVideo" class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>

						</div>


						
						<div class="add-options-message" style="border-top: solid 1px #e6ecf5;">
						
							
							<input @change="getFile" ref="fileInput" type = "file" multiple="multiple" style="display: none;"  accept="image/*"/>
							
							<input @change="getVideoFile" ref="fileVideoInput" type = "file"  style="display: none;"  accept="video/*"/>
							
							
							<!-- 选择按钮 -->
							<a v-show="!hasVideo" @click="chooseFile" href="javaScript:void(0)" class="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
							<!-- 	<svg class="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"> -->
								<svg class="olymp-camera-icon" >
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
								</svg>
							</a>
														
							<a v-show="!hasImg" @click="chooseVideo" href="javaScript:void(0)"  class="options-message"  data-placement="top"   data-original-title="TAG YOUR FRIENDS">
								<svg class="olymp-computer-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
							</a>
		
				<!-- 			<a href="javaScript:void(0)" class="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD LOCATION">
								<svg class="olymp-small-pin-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use></svg>
								湖南
							</a> -->
							
							
								<div class="options-message smile-block">
									<svg class="olymp-happy-sticker-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use></svg>
							
									<ul class="more-dropdown more-with-triangle triangle-bottom-right" style="right: -50px;">
										<li>
											<a href="javascript:void(0);">
												<img @click="addImg" src="static/img/icon-chat1.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat2.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat3.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat4.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat5.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat6.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat7.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat8.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat9.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat10.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat11.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat12.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat13.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat14.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat15.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat16.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat17.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat18.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat19.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat20.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat21.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat22.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat23.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat24.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat25.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat26.png" alt="icon">
											</a>
										</li>
										<li>
											<a href="javascript:void(0);">
												<img  @click="addImg" src="static/img/icon-chat27.png" alt="icon">
											</a>
										</li>
									</ul>
								</div>
								
							
		
							<button v-show="!sending" :disabled=" !this.share_content.blogContent && !hasVideo && !hasImg " type="button" @click="send" class="btn btn-primary btn-md-2">确认发送</button>
							<button v-show="sending" disabled type="button"  class="btn btn-md-2">正在发送...</button>
							<!-- <button type="button"   class="btn btn-md-2 btn-border-think btn-transparent c-grey">预览</button> -->
		
						</div>
						
						
				
								
		
					</form>
				</div>
 
			</div>
		</div>
		
		<!-- ... end News Feed Form  -->			
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import req from '../../../../axios'
	import util from '../../../../common'
	
	export default {
		data() {
			return {
				share_content:{
					"blogContent":null,
					"blogImgs":null,
					"blogVideo":null,
					"blogRepeat":null,
				},
				ori_img:[],//存储源文件
				imgs:[],//存储预览文件
				video_url:null,
				video:null,
				
				sending:false
				
			}
		},
		computed :{
			...mapGetters(['me']),
			hasImg : {
				get(){
					return this.ori_img.length > 0 
				},
				set(e){}
			},
			hasVideo :{
				get(){
					return this.video != null
				},
				set(e){}
			}
		}
		,
		methods: {
			onSubmit() {
				console.log('submit!');
				this.$ajax.get('blog/get/1').then((res) => {
					console.log(res.data)
				}).catch((err) => {
					console.log(err)
				})
			},
			chooseFile(){
				if(this.ori_img.length > 9) {util.alertErrorMsg("仅可以发送9张图片"); return ;}
				this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
			},	
			chooseVideo(){
				this.$refs.fileVideoInput.dispatchEvent(new MouseEvent('click'))
			},
			getVideoFile(){
				var file = this.$refs.fileVideoInput.files[0];
				//this.uploadFile(file.name,file)
				//this.video_url= util.VAR().imgurl + file.name;
				if(!file) return;
				this.video = file
        var url = URL.createObjectURL(file);
				this.video_url = url
				this.hasVideo = true
			},
			//获取图片
			getFile(){
				var that = this;
				const fileList = this.$refs.fileInput.files;
				var len  = fileList.length
				//console.log(len)
				if(len > 0){
					/* if(inputFile.type !== 'image/jpeg' && inputFile.type !== 'image/png' && inputFile.type !== 'image/gif'){
						alert('不是有效的图片文件！');
						return;
					} */
				/* 	this.imgInfo = Object.assign({}, this.imgInfo, {
						name: inputFile.name,
						size: inputFile.size,
						lastModifiedDate: inputFile.lastModifiedDate.toLocaleString()
					}) */		
					
					for(var i=0;i<len;i++){ 
						const reader = new FileReader();
						reader.readAsDataURL(fileList[i]);
						reader.onload = function (e) {
							that.imgs.push(this.result)
						}
						this.ori_img.push(fileList[i]);
					}
				} else {
					return;
				}
			},
			remove(i){
				this.imgs.splice(i,1);
				this.ori_img.splice(i,1);
			},
			removeVideo(){
					this.video = null;
			},
			async send(){
				//检测
				var enable = this.$refs.inputdiv.innerHTML || this.hasVideo || this.hasImg
				if(!enable){
					util.alertErrorMsg("未输入内容");
					return ;
				}
				
				this.sending = true;
				
				this.share_content.blogContent = this.$refs.inputdiv.innerHTML
				//上传图片 填充信息
				var videos = []
				if(this.video){videos.push(this.video)} //把对象压入数组
				var files = this.hasImg? this.ori_img : videos; //只上传有的文件
				//console.log(files,vedio)
				var url = ""
				for(var i=0;i<files.length;i++){
						var file = files[i]
						var res = await this.uploadFile(file.name,file)
						url = url + res.data.data
						if(i < files.length - 1) url = url + "|"
				}
				if(this.hasImg){
					 this.share_content.blogImgs = url
				}else{
					 this.share_content.blogVideo = url
				}
				//清空当前的输入内容
				this.$refs.inputdiv.innerHTML = ""
				//console.log(this.share_content)
				//调用接口
				//添加一条新博客到blog_list --> mainContent
				var blog = util.objectClone(this.share_content)
				PubSub.publish("publish_blog",blog)
				
				this.sending = false;
				//清空存储
				for(let key in this.share_content){
					this.share_content[key]  = ''
				}
				this.video = null
				this.ori_img = []
				this.imgs = []
				
			},
			
			async uploadFile(name,file){
				let form = new FormData();
				form.append('file', file);
				form.append('filename',name);
				const res = await req.uploadFile(form);
				return res
			},
			
			clear(){
				this.share_content.blogContent = ""
				this.$refs.inputdiv.innerHTML = ""
				//console.log(this.$refs.inputdiv.innerHTML);
			},
			input(e){
				this.share_content.blogContent = e.target.innerHTML;
			},
			addImg(e){
				var msg = this.$refs.inputdiv.innerHTML
				this.$refs.inputdiv.innerHTML = msg + e.target.outerHTML
				this.share_content.blogContent = msg + e.target.outerHTML;
			}
		}
	}
</script>

<style scope>
	.img-display{
		margin-left:15px;
		margin-top:5px;
	}
	.img-display img{
		margin:5px;
		border-radius:7px;
		cursor:pointer;
		height:90px
	}
	.img-item{
		display:inline;
		position:relative
	}
	.img-item svg{
		position:absolute;
		cursor:pointer;
		right:5px
	}
	
	.video-display{
		 padding: 5px;
	}
	
	.video-display video{
		margin-left: 25%;
		width: 50%;
	}
	
</style>
