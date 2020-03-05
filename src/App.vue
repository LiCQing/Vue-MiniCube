<template>
	<div>
    <router-view></router-view>
		
		
		
		<UpdateHeaderPhoto/>
		<ChoosefromMyPhoto/>
	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
/* import PersionalDashboard from './components/PersionalDashboard' */
import Login from './components/Login'
import ErrorResult404 from './components/ErrorResult/ErrorResult404'
import ErrorResult500 from './components/ErrorResult/ErrorResult500'


import ChatPopu from './components/windowPopup/BackToTop'
import ChoosefromMyPhoto from './components/windowPopup/ChoosefromMyPhoto'
import UpdateHeaderPhoto from './components/windowPopup/UpdateHeaderPhoto'
/* import ChatPopu from './components/windowPopup/BackToTop' */

import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Login,ErrorResult404,ErrorResult500,UpdateHeaderPhoto,ChoosefromMyPhoto
  },
  data(){
		return {
		}  
  },
	computed: {
		...mapGetters(['websock_states'])
	},
  created() {
       //console.log( this.util.connectSocket());
			 if(window.mySocket && window.mySocket.readyState == 1)
					console.log("已经连接")
				else
				  this.conect_msg_server()
					
			//获取东西
			//1.通知
			this.request.getNoticeList()

			//2.好友列表
			this.request.getFriendList()
			
			
    },
  destroyed: function () {
      //this.websocketclose();
   },
   methods: {	
       ...mapActions(['conect_msg_server'])
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
