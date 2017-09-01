	function $(id){
		return document.getElementById(id);
	}
	var ord=1;//当前图片位置
	var myTime=null;
	var imgs=["ph1.jpg","ph2.jpg","ph3.jpg","ph4.jpg"];
	//启动定时器
	function starTime(){
		myTime=setInterval(changeimg,1000);
	}
	function changeimg(){
		ord++;
		if(ord>4){
			ord=1;
		}
		 changeimgAng(ord);
	}
	//停止定时器
	function stopTime(){
		clearInterval(myTime);
	}
	
	//让圆点对应各自图片
	function img(orda){
		ord=orda;
		
		changeimgAng(ord);
	}
	
	
	function changeimgAng(ord){
		$("LBA").src="img/"+imgs[ord-1];
		var lis=$("LBT").children;
		for(var i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="#666";
		}
		lis[ord-1].style.backgroundColor="#fff";					
	}

	



