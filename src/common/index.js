import { Message } from 'element-ui'

export default {
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
	//---------------------------------------------------------------弹出消息函数
	alertErrorMsg(msg){
		Message({ message:msg,  type: 'error', duration: 3 * 1000, showClose: true, offset:300, center:true })
	},
	
	alertSuccessMsg(msg){
		Message({ message:msg,  type: 'success', duration: 3 * 1000, showClose: true, offset:300, center:true })
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