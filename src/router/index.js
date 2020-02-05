import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入组件
import Index from '../components/Index'
import Login from '../components/Login'
import PersonalIndex from '../components/PersonalIndex'
import PersonalHome from '../components/PersonalHome'
import Content from '../components/container/Content'
import FriendList from '../components/Friend/FriendList'

import ErrorResult404 from '../components/ErrorResult/ErrorResult404'
//个人信息设置相关组件
import PersionalDashboard from '../components/PersionalDashboard'
import Infomation from '../components/ProfileSetting/Infomation'
import ActionSetting from '../components/ProfileSetting/ActionSetting'
import ChangePwd from '../components/ProfileSetting/ChangePwd'
import Education from '../components/ProfileSetting/Education'
import Habbies from '../components/ProfileSetting/Hobbies'
import ChatMessage from '../components/Profile/ChatMessage'
import FriendRequest from '../components/Profile/FriendRequest'
import Notifications from '../components/Profile/Notifications'
import FavSetting from '../components/Profile/FavSetting'
//

export default new Router({
    routes: [
    {
        path: '/login',
        component: Login
    },
	{
	    path: '/index',
	    component: Index
	},
	{
		path:'/personalIndex',
		component:PersonalIndex,
		children:[
		{
			path:"/",
			component:Content,
		},{
			path:"timeline",
			component:Content,
		},{
			path:"friend",
			component:FriendList,
		}
		]
			
	},
	{
		path: '/persionalDashboard',
		component:PersionalDashboard,
		 children:[
        {
			path:'info',
			component:Infomation,
        },
		{
			path:'setting',
			component: ActionSetting
		},
		{
			path:'changepwd',
			component: ChangePwd
		},
		{
			path:'hobbies',
			component: Habbies
		},
		{
			path:'education',
			component: Education
		},
		{
			path:'notification',
			component: Notifications
		},
		{
			path:'chat',
			component: ChatMessage
		},
		{
			path:'request',
			component: FriendRequest
		},
		{
			path:'fav-setting',
			component: FavSetting
		},
		{
			path:'/',
			component:Infomation,
		},
	   ],
	},
	{
		path: '/home',
		component: PersonalHome
	},
	{
		path: '/',
		redirect: '/index'
	},
	
	{
		path : '',
		component:ErrorResult404
	}
    ]
})