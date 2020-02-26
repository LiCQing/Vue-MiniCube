import { Message } from 'element-ui'

export default {
	//一些参数
	VAR(){
		var local = {
			imgurl:"http://121.43.230.40"
		}
		
		var server = {
			imgurl:""
		}
		
		return local;
	},
	
	//page参数
	PAGE(){
		return {
			current:1,
			number:10,
            total:0,
            hasPre:false,
			hasNext:true,
			data:{}
		}
	},
	
	timeName(filename){
		return Date().getTime() + "";
	},
	
	//-------------------------------------时间函数
	dateLong2String(time){
	       var date = new Date(time);
	       var year = date.getFullYear();
	       var month = date.getMonth()+1;
	       var day = date.getDate();
	       month = month < 10 ? "0"+month:month;
	       day = day < 10 ? "0"+day:day;
	       return year+"-"+month+"-"+day;
	},
	//获取现在的时间
	CurrentTime() {
	        var now = new Date();
	        var year = now.getFullYear(); //得到年份
	        var month = now.getMonth();//得到月份
	        var date = now.getDate();//得到日期
	        var day = now.getDay();//得到周几
	        var hour = now.getHours();//得到小时
	        var minu = now.getMinutes();//得到分钟
	        var sec = now.getSeconds();//得到秒
	　　     var MS = now.getMilliseconds();//获取毫秒
	        var week;
	        month = month + 1;
	        if (month < 10) month = "0" + month;
	        if (date < 10) date = "0" + date;
	        if (hour < 10) hour = "0" + hour;
	        if (minu < 10) minu = "0" + minu;
	        if (sec < 10) sec = "0" + sec;
	        if (MS < 100) MS = "0" + MS;
	        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	        week = arr_week[day];
	        var time = "";
			time = year +"-"+month + "-" +date + " " + hour +":" + minu + ":" + sec
			return time;
	        //time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
	        //当前日期赋值给当前日期输入框中（jQuery easyUI）
	        //$("#currentDate").html(time);
	        //设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
	        //var timer = setTimeout("writeCurrentDate()", 1000);
	   },
	today(){
		var now = new Date();
		var year = now.getFullYear(); //得到年份
		var month = now.getMonth();//得到月份
		var day = now.getDate();//得到日期
		
		if (month < 10) month = "0" + month;
		if (day < 10) day = "0" + day;
		
		return year+"-"+month+"-"+day
	},
	getDateOfNum(num){
		if(num == null){
			return null
		}
		let len = (num + ' ').length;//隐式转换为字符串并拿到该字符串的长度;
		let data = "";//定义一个空字符串
		if (len == 10) {//当我传的实参===> 时间戳位数等于10时,单位是秒,我需要乘以1000变为毫秒
			data = num * 1000;
		} else {//否则时间戳位数为13时,单位是毫秒,无需变换
			data = num;
		}
		var date = new Date(data); //格式化时间戳,变为国际标准模式====> 如: Fri Apr 19 2019 13:42:34 GMT+0800 (中国标准时间)
		//然后直接调用时间对象的各种方法,即可得到相应的年-月-日 时:分:秒
		let year = date.getFullYear();
		let month = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
		let day = date.getDate() + " ";
		if (day < 10) day = "0" + day;
		/* let h = date.getHours() + ':';

		let m = date.getMinutes() + ':';

		let s = date.getSeconds(); */
		return year+"-"+month+"-"+day
	},
	getDateTimeOfNum(num){
		if(num == null){
			return null
		}
		let len = (num + ' ').length;//隐式转换为字符串并拿到该字符串的长度;
		let data = "";//定义一个空字符串
		if (len == 10) {//当我传的实参===> 时间戳位数等于10时,单位是秒,我需要乘以1000变为毫秒
			data = num * 1000;
		} else {//否则时间戳位数为13时,单位是毫秒,无需变换
			data = num;
		}
		var date = new Date(data); //格式化时间戳,变为国际标准模式====> 如: Fri Apr 19 2019 13:42:34 GMT+0800 (中国标准时间)
		//然后直接调用时间对象的各种方法,即可得到相应的年-月-日 时:分:秒
		let year = date.getFullYear();
		let month = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
		let day = date.getDate() + " ";
		if (day < 10) day = "0" + day;
		let h = date.getHours() 
		if(h<10) h = "0"+h
		let m = date.getMinutes() 
		if(m<10) m = "0"+m
		let s = date.getSeconds()
		if(s<10) s = "0"+s
		if(new Date().getFullYear() == year)
			return month+"-"+day + " " +h +":"+m
		else
			return year+"-"+month+"-"+day + " " +h +":"+m
	},
	getTimeOfSpace(num){
		  
		 var space = (new Date().getTime() - num) / 1000;
		 if(space < 60) return "刚刚"
		 space =  space / 60
		 if(space < 60) return Math.floor(space) + "分钟前"
		 space = space / 60
		 if(space < 24) return Math.floor(space) + "小时前"
		 
		 return this.getDateTimeOfNum(num)
		 
	},
	
	//--------------对象管理
	objectClone(obj){
		return JSON.parse(JSON.stringify(obj))
	},
	
	deepClone(data){

       var type = typeof(data);
       var obj;
       if(type === 'array'){
           obj = [];
       } else if(type === 'object'){
           obj = {};
       } else {
           //不再具有下一层次
           return data;
       }
       if(type === 'array'){
           for(var i = 0, len = data.length; i < len; i++){
               obj.push(this.deepClone(data[i]));
           }
       } else if(type === 'object'){
           for(var key in data){
               obj[key] = this.deepClone(data[key]);
           }
       }
       return obj;
	},
	
	//---------------------------------------------------------------弹出消息函数
	alertErrorMsg(msg){
		Message({ message:msg,  type: 'error', duration: 3 * 1000, showClose: true, offset:300, center:true })
	},
	
	alertSuccessMsg(msg){
		Message({ message:msg,  type: 'success', duration: 3 * 1000, showClose: true, offset:300, center:true })
	},
	
	alertWarningMsg(msg){
		Message({ message:msg,  type: 'warning', duration: 3 * 1000, showClose: true, offset:300, center:true })
	},
	
	//--------------------------------本地读取函数
	//本地保存读取
	getInfoFromLocal2Json(key){
		return JSON.parse(localStorage.getItem(key))
	},
	getInfoFromLocal(key){
		return localStorage.getItem(key)
	},
	setJsonInfoToLoca(key,value){
		localStorage.setItem(key, JSON.stringify(value));
	},
	setInfoToLoca(key,value){
		localStorage.setItem(key, value);
	},
	removeInfoFromLocal(key){
		localStorage.removeItem(key)
	}
		  
		  
}