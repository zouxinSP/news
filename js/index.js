function showobj(id){
	var obj = document.getElementById(id);
	obj.style.display = "block";
}

function hiddenobj(id){
	var obj = document.getElementById(id);
	obj.style.display = "none";
}

//banner
var arr = ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg','images/banner4.jpg'];
var count = 0;


//切换图片
function autoPlay(){

	if(arr.length == count)//如果超出数组长度，重新复制为0
	count = 0;	
	document.getElementById('banner1').src=arr[count];
	count++;	
}


var Timer = setInterval(autoPlay,2000);

//清除定时器
function clearTimer(){
	clearInterval(Timer);
}

//鼠标悬停时候指定播放的图片
function showbannerbyid(num){
	clearTimer();
	var index = parseInt(num);
	document.getElementById("banner1").src = arr[index-1];
	count = index;
}

//鼠标离开恢复自动播放效果
function btnMouseOut(num){
	 Timer = setInterval(autoPlay,2000);
}


window.onload = function(){
	// middlebox实现无缝滚动
	var speed = 10;
	var tab  = document.getElementById("demo");
	var tab1 = document.getElementById("demo1");
	var tab2 = document.getElementById("demo2");
	// console.log(tab2);
	tab2.innerHTML = tab1.innerHTML;

	function Marquee(){
		if(tab2.offsetWidth - tab.scrollLeft <= 0){
			tab.scrollLeft -= tab2.offsetWidth;
		}else{
			tab.scrollLeft++;
		}
	}

	var mymar = window.setInterval(Marquee,speed);

	tab.onmouseover = function(){
		window.clearInterval(mymar);
	}
	tab.onmouseout = function(){
		mymar = window.setInterval(Marquee,speed);
	}
}




//实现浮动广告特效
function changehight(){
	var QQ = document.getElementById('zixunbox');
	QQ.style.top = document.documentElement.scrollTop + document.body.scrollTop + 200 + 'px'; 
}

window.onscroll = changehight;


//留言验证
function isok(){
	if(document.getElementById("username").value == "" || document.getElementById('username').value == NaN){
		alert("用户名不能为空");
		return false;
	}

	if(document.getElementById("Email").value == "" || document.getElementById('Email').value == NaN){
		alert("Email不能为空");
		return false;
	}

	// 验证email格式
	var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!document.getElementById("Email").value.match(email)){
		alert("Email格式错误");
		document.getElementById("Email").onfocus();
		return false;
	}

	// 验证qq格式
	var qq = /^[0-9]*[1-9][0-9]*$/;
	if(!document.getElementById("QQ").value.match(qq)){
		alert("qq格式错误");
		return false;
	}


	 // 	// 验证qq格式
	var mobile = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|15\d{9}$/;
	if(!document.getElementById("Mobile").value.match(mobile)){
		alert("手机号码格式错误");
		return false;
	}
}	

