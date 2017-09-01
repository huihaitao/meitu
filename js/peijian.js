$(document).ready(function(){                          
    var index=0;
    var i=0;
    
    //通过控制i ，来显示图片
    function showImg(i){
        $(".box img").eq(i).fadeIn(50).siblings("img").hide();
         
    }
        $(".uls li").mouseenter(function(){
            index  =  $(".uls li").index(this);
            showImg(index);
        });	
		
    })		
