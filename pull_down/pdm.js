window.onload = function(){
	var box = document.getElementById("pdlist"),
	    title = box.getElementsByTagName("cite")[0],
	    sj = box.getElementsByTagName("i")[0],
	    menu = box.getElementsByTagName("ul")[0],
	    as = box.getElementsByTagName("a"),
	    flag = 1;
	    index = -1;

	//点击文字时，显示下拉列表
	title.onclick = function(event){
		//获取event对象
		event = EventUtil.getEvent(event);
		//阻止冒泡
		EventUtil.stopPropagation(event);
		//显示列表
		menu.style.display = "block";

		//按下方向键
		document.onkeyup = function(event){
			event = EventUtil.getEvent(event);
			for (var i = 0; i < as.length; i++) {
				as[i].style.background = "none";
			}
			//按下了向下方向键
			if (event.keyCode == 40) {
				index++;  //没按下方向键index加1
				if (index>=as.length) { //如果大于index的值等于as的长度时，把index置0，再按下时，键盘选项重新定位到列表第一项
					index = 0;
				}
				as[index].style.background = "#ccc";
			} 
			//按下了向上方向键
			if (event.keyCode==38) {
				if (index<=0) { 
					index = as.length;//如果按方向键的位置已经在第一项，再按下时把index赋值为as的长度，
				}
				index--; //定位到最后一项
				as[index].style.background = "#ccc";//且选中的那项的背景色变为灰色
			}
			//按下了回车键选中
			if (event.keyCode==13 && index!=-1) {
				title.innerHTML = as[index].innerHTML;//按下回车键把选中的选项显示在<cite>标签内
				// for (var i = 0; i < as.length; i++) {
				// 	as[i].style.background = "none";  //每一项去掉背景
				// }
				//按回车键展开或收起列表
				if (flag == 1) {
					menu.style.display = "none";//列表隐藏
					flag = 2;
					return;
				}
				if (flag == 2) {
					menu.style.display = "block";
					flag = 1;
					return;
				}				
				index = -1;
			}
		}
	};

	//点击三角时显示列表
	sj.onclick = function(event){
		//获取event对象
		event = EventUtil.getEvent(event);
		//阻止冒泡
		EventUtil.stopPropagation(event);
		//显示列表
		menu.style.display = "block";
	};

	//鼠标经过、离开、点击每个选项时
	for (var i = 0; i < as.length; i++) {
		as[i].onmouseover = function(){
			this.style.backgroundColor = "#ccc";
		};
		as[i].onmouseout = function(){
			this.style.background = "none";
		};
		as[i].onclick = function(){
			title.innerHTML = this.innerHTML;
		};
	};
	//点击空白处收回列表
	document.onclick = function(){
		menu.style.display = "none";
	};
}