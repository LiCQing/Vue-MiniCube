<template>
	<div class="more">
		<svg class="olymp-three-dots-icon">
			<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
		</svg>
		<ul class="more-dropdown">
			<li>
				<a @click="edit" href="javaScript:void(0)">编辑</a>
			</li>
			<li>
				<a @click="del" href="javaScript:void(0)">删除</a>
			</li>
			<li>
				<a @click="edit" href="javaScript:void(0)">关闭/开启通知</a>
			</li>
			<li>
				<a @click="edit" href="javaScript:void(0)">顶置</a>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import req from '../../../../axios'
	import util from '../../../../common'
	
	
	export default {
		props:['id','index'],
		methods: {
			edit() {
				util.alertWarningMsg("该功能需要开启会员")
			},
			del(){
				var param = {id:this.id,index:this.index}
				PubSub.publish("del_blog",param)
			}
		},
		}
</script>

<style>
</style>
