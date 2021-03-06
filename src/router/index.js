import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

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
import Profile from '../components/Profile'
import Infomation from '../components/ProfileSetting/Infomation'
import ActionSetting from '../components/ProfileSetting/ActionSetting'
import ChangePwd from '../components/ProfileSetting/ChangePwd'
import Education from '../components/ProfileSetting/Education'
import Habbies from '../components/ProfileSetting/Hobbies'
import ChatMessage from '../components/Profile/ChatMessage'
import FriendRequest from '../components/Profile/FriendRequest'
import Notifications from '../components/Profile/Notifications'
import FavSetting from '../components/Profile/FavSetting'
//搜索结果
import SearchResult from '../components/SearchResult'

import PersonalAllBlog from '../components/PersonalAllBlog'


const routes = [{
		path: '/login',
		component: Login
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/p',
		component: PersonalAllBlog
	},
	{
		path: '/pindex',
		component: PersonalIndex,
		 meta: {
			requireAuth: true
		}, 
		children: [{
			path: "/",
			component: Content,
		}, {
			path: "timeline",
			component: Content,
		}, {
			path: "friend",
			component: FriendList,
		}]

	}, {
		path: '/result',
		component: SearchResult,
		meta: {
			requireAuth: true
		},
	},
	{
		path: '/profile',
		component: Profile,
		 meta: {
			requireAuth: true
		}, 
		children: [{
				path: 'info',
				component: Infomation,
			},
			{
				path: 'setting',
				component: ActionSetting
			},
			{
				path: 'changepwd',
				component: ChangePwd
			},
			{
				path: 'hobbies',
				component: Habbies
			},
			{
				path: 'education',
				component: Education
			},
			{
				path: 'notification',
				component: Notifications
			},
			{
				path: 'chat',
				component: ChatMessage
			},
			{
				path: 'request',
				component: FriendRequest
			},
			{
				path: 'fav-setting',
				component: FavSetting
			},
			{
				path: '/',
				component: Infomation,
			},
		],
	},
	{
		path: '/home',
		component: PersonalHome,
		meta: {
			requireAuth: true
		}, 
	},
	{
		path: '/',
		redirect: '/index'
	},
	/* {
		path: '/detail',
		component: PersonalHome,
	}, */
	{
		path: '*',
		component: ErrorResult404
	}
]



//拦截
const VueRouter = new Router({
	/* mode:'history', */
	routes,
});

VueRouter.beforeEach((to, from, next) => {

	if (to.matched.some((r) => r.meta.requireAuth)) {
		let user = JSON.parse(localStorage.getItem('user'));
		if (store.state.token) { //判断是否已经登录
			console.log('这是通过拦截后到处理', from);
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} //登录成功后重定向到当前页面
			});
		}
	} else {
		console.log('未登陆');
		console.log(this)
		next();
	}
	//如果本地 存在 token 则 不允许直接跳转到 登录页面
	if (to.fullPath === "/login") {
		if (store.state.token) {
			next({
				path: from.fullPath
			});
		} else {
			next();
		}
	}
});




export default VueRouter;
