var data = ['iphone6', 'ipad', '三星笔记本', '佳能相机', '惠普打印机', '谢谢惠顾', '1000元购物卷', '5元优惠券'];
	timer = null;
	flag = 0; 
window.onload = function() {
	var play = document.getElementById("play"),
		stop = document.getElementById("stop");

	//开始抽奖
	play.onclick = playFun;
	stop.onclick = stopFun;

	//键盘事件
	document.onkeyup = function(event){
		event = event || window.event;
		if(event.keyCode == 13){
			if ( flag == 0 ) {
				playFun();
				flag = 1;
			} else{
				stopFun();
				flag = 0;
			}
		}
	}
}

function playFun() {
	var play = document.getElementById("play");
	var title = document.getElementById("title");
	clearInterval(timer);
	timer = setInterval(function() {
		var random = Math.floor(Math.random() * data.length); //Math.random()生成0-1之间的数字
		title.innerHTML = data[random];
	}, 50);
	play.style.backgroundColor = "#999";
}

function stopFun() {
	clearInterval(timer);
	var play = document.getElementById("play");
	play.style.backgroundColor = "#036"
}