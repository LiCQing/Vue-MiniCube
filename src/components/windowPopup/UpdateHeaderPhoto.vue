<template>
	<div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">
		<div class="modal-dialog window-popup update-header-photo" role="document">
			<div class="modal-content">
			<!-- 	<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
					<svg class="olymp-close-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a> -->
	
				<div class="modal-header" style="padding:15px 15px">
					<h6 class="title">更新头像</h6>
					<div>
						<button @click="upload_head" class="btn btn-primary btn-md-2" style="margin: 0px;padding: 10px 15px;">确定</button>
						<button ref="close" data-dismiss="modal" aria-label="Close" class="btn btn-md-2  btn-border-think btn-transparent c-grey" style="margin: 0px;padding: 10px 15px;">取消</button>
					</div>
				</div>
	
				<div class="modal-body">
					
				  <input @change="getFile" ref="fileInput" type="file" style="display: none;" />
				  <a href="javaScript:void(0)" @click="choose_img" class="upload-photo-item">
					  <div v-if="img" class="img-item top-header-author " style="left:auto" >
						  <a class="author-thumb">
					  	<img :src="img" style="width: 130px;" /></a>
					  </div>
					  
					<svg v-else class="olymp-computer-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
	
					<h6>上传图片</h6>
					<span>浏览</span>
				 </a>
	
					<a href="#" class="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">
	
				<svg class="olymp-photos-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>
	
				<h6>从我的照片中选择</h6>
				<span>Choose from your uploaded photos</span>
			</a>
				</div>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import req from '../../axios'
	export default{
		data() {
			return {
				img: null
			}
		},
		methods: {
			choose_img() {
				this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
			},
			close_this(){
				this.$refs.close.dispatchEvent(new MouseEvent('click'))
			},
			async upload_head(){
				let form = new FormData();
				form.append('file', this.img);
				//接口部分
				await req.uploadhead(form).then(response => {
					console.log(response)
					
				})
				this.close_this()
			},
			getFile(){
				var that = this;
				const fileList = this.$refs.fileInput.files;
				var len  = fileList.length
				console.log(len);
				if(len > 0){
					const reader = new FileReader();
					reader.readAsDataURL(fileList[0]);
					reader.onload = function (e) {
						that.img = this.result
					}
				}
	
			}
		},
	}
	
</script>

<style scoped>
	.img-item{
		
	}
</style>
