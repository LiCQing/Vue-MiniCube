<template>
	<div>
		
		<div class="form-group label-floating is-empty">
		<!-- 	<label class="control-label">在此输入回复内容</label>
			<div></div> -->
			<!-- <textarea class="form-control" placeholder=""  ></textarea> -->
			<div @keydown="input" ref="inputdiv"   class="form-control" contentEditable="true" style="font-size:16px">
				<img src="static/img/icon-chat1.png" alt="icon">
			</div>
		</div>
		
		
		<div class="add-options-message">
			<a href="javascript:void(0);" class="options-message">
				<svg class="olymp-computer-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
			</a>
			<a href="javascript:void(0);" class="options-message">
				<svg class="olymp-computer-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
			</a>
			<div class="options-message smile-block">
				<svg class="olymp-happy-sticker-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use></svg>
		
				<ul class="more-dropdown more-with-triangle triangle-bottom-right">
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
			
			<button @click="send" class="btn btn-primary btn-sm">回复</button>
			<button @click="clear" class="btn btn-primary btn-sm">清空</button>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import PubSub from 'pubsub-js'
	export default {
		data(){
			return {
				msg: {
						"type": 0,
						"fromId": '',
						"toId":'',
						"msg":'',
						"time":'',
						"token":''
					 }
			}
		},
		methods : {
			send(){
				this.msg.msg = this.$refs.inputdiv.innerHTML
				if(this.msg.msg == ""){
					alert("未输入消息");
					return ;
				}
				var msg = this.msg
				
				this.$store.dispatch("send_msg",msg)
				
				this.$refs.inputdiv.innerHTML = ""
				
				PubSub.publish("msgbox-buttom")
				
				console.log(this.$refs)
				var div = this.$refs.box;
			
				
			},
			clear(){
				this.msg.msg = ""
				this.$refs.inputdiv.innerHTML = ""
				//console.log(this.$refs.inputdiv.innerHTML);
			},
			input(e){
				 this.msg.msg = e.target.innerHTML;
			},
			addImg(e){
				var msg = this.$refs.inputdiv.innerHTML
				this.$refs.inputdiv.innerHTML = msg + e.target.outerHTML
				this.msg.msg = msg + e.target.outerHTML;
			}
		}	
	}
</script>

<style>
</style>
