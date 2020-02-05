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
							<img src="static/img/author-page.jpg" alt="author">
						</div>
						<div class="form-group with-icon label-floating is-empty">
							<label class="control-label">Share what you are thinking here...</label>
							<textarea class="form-control" placeholder=""></textarea>
						</div>
						
						
						<div v-show="hasImg || hasVideo" class="img-display">
							  <div class="img-item"  v-for="(img,index) in imgs" :index="index">
								  <img :src="img"  />
								  <svg @click="remove(index)" class="olymp-little-delete"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
							  </div>
						</div>
						
						
						<div class="add-options-message" style="border-top: solid 1px #e6ecf5;">
							<input @change="getFile" ref="fileInput" type = "file" multiple="multiple" style="display: none;"  accept="image/*"/>
							<a @click="chooseFile" href="javaScript:void(0)" class="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
							<!-- 	<svg class="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"> -->
								<svg class="olymp-camera-icon" >
									<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
								</svg>
							</a>
							
						<!-- 	<a data-toggle="modal" data-target="#create-friend-group-add-friends" href="#" class="btn btn-breez btn-sm">Open Popup</a> -->
							
							<a href="javaScript:void(0)" data-toggle="modal" data-target="#create-friend-group-add-friends" class="options-message"  data-placement="top"   data-original-title="TAG YOUR FRIENDS">
								<svg class="olymp-computer-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
							</a>
		
							<a href="javaScript:void(0)" class="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD LOCATION">
								<svg class="olymp-small-pin-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use></svg>
								湖南
							</a>
		
							<button class="btn btn-primary btn-md-2">确认发送</button>
							<button   class="btn btn-md-2 btn-border-think btn-transparent c-grey">预览</button>
		
						</div>
						
						
				
								
		
					</form>
				</div>
 
			</div>
		</div>
		
		<!-- ... end News Feed Form  -->			
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
		 
				},
				//hasImg:false,
				hasVideo:false,
				imgs:[]
			}
		},
		computed :{
			hasImg : {
				get(){
					return this.imgs.length > 0 
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
				this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
			},
			getFile(){
				var that = this;
				const fileList = this.$refs.fileInput.files;
				var len  = fileList.length
				console.log(len);
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
						if(that.imgs.length  > 8) return
						const reader = new FileReader();
						reader.readAsDataURL(fileList[i]);
						reader.onload = function (e) {
							that.hasImg = true
							//console.log(this.result)
							that.imgs.push(this.result)
							//that.imgSrc = this.result;
						}
					}
					//console.log(this.$refs.fileInput.files)
					//this.$refs.fileInput.files = []
				} else {
					return;
				}
			},
			remove(i){
				this.imgs.splice(i,1);
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
</style>
