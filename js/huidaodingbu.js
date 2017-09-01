var currentPosition,timer;
function GoTop(){
	timer=setInterval("runGoTop()",1);
}
function runGoTop(){
	currentPosition=document.documentElement.scrollTop||document.body.scrollTop;
	clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	currentPosition-=20;//每次减20的速度来返回
	if(currentPosition>0){
		window.scrollTo(0,currentPosition);//scrollTo() 方法可把内容滚动到指定的坐标。
//		$("c4").style.display="none";
	}else{
		window.scrollTo(0,0)
		clearInterval(timer);
		
	}
	
}
//注：在下body处加页面的初始状态scrollTo值
