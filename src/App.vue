<template>
	<div>
    <router-view></router-view>
		
		
		
		<UpdateHeaderPhoto/>
		<ChoosefromMyPhoto/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
/* import PersionalDashboard from './components/PersionalDashboard' */
import Login from './components/Login'
import ErrorResult404 from './components/ErrorResult/ErrorResult404'
import ErrorResult500 from './components/ErrorResult/ErrorResult500'


import ChatPopu from './components/windowPopup/BackToTop'
import ChoosefromMyPhoto from './components/windowPopup/ChoosefromMyPhoto'
import UpdateHeaderPhoto from './components/windowPopup/UpdateHeaderPhoto'
/* import ChatPopu from './components/windowPopup/BackToTop' */

export default {
  name: 'App',
  components: {
    HelloWorld,Login,ErrorResult404,ErrorResult500,UpdateHeaderPhoto,ChoosefromMyPhoto
  },
  data(){
	return {
		id:100,
		websock:undefined
	}  
  },
  created() {
      this.initWebSocket()
    },
  destroyed: function () {
      this.websocketclose();
   },
   methods: {	
      initWebSocket: function () {
			//	console.log(this)
			 //this.$message('这是一条消息提示');
		   //this.$store.dispatch('conect_msg_server',{'uri':"localhost:9658/chat/imserver/identify"});
		
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
