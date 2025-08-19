window.onload=function(){
	
	console.log("网页可见区域宽：" + document.body.clientWidth);
	console.log("网页可见区域高：" + document.body.clientHeight);
	console.log("网页可见区域宽（包括边线的宽）：" + document.body.offsetWidth );
	console.log("网页可见区域高（包括边线的宽）：" + document.body.offsetHeight);
	console.log("网页正文全文宽：" + document.body.scrollWidth);
	console.log("网页正文全文高：" + document.body.scrollHeight);
	console.log("网页被卷去的高：" + document.body.scrollTop);
	console.log("网页被卷去的左：" + document.body.scrollLeft);
	console.log("网页正文部分上：" + window.screenTop);
	console.log("网页正文部分左：" + window.screenLeft);
	console.log("屏幕分辨率的高：" + window.screen.height);
	console.log("屏幕分辨率的宽：" + window.screen.width);
	console.log("屏幕可用工作区高度：" + window.screen.availHeight);
	console.log("屏幕可用工作区宽度：" + window.screen.availWidth);

    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");

	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var n11=document.getElementById("n1");
	var n12=document.getElementById("n2");
	audio.volume = 0.6;

    audio.play().catch(function (error) {
        console.log("Auto-play was blocked. Waiting for user interaction.");
    });

	n11.addEventListener("touchstart",function(event){
		if(audio.volume>=0&&audio.volume<=1){
			audio.volume=audio.volume+0.1;
		}	
	},false);
	n12.addEventListener("touchstart",function(event){
		if(audio.volume>=0&&audio.volume<=1){
			audio.volume=audio.volume-0.1;
		}
	},false);

	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//music.style.animationPlayState="paused";
		//music.style.webkianimationPlayState="paused";
	},false)

	//music.onclick=function(){//click有0.3秒的延迟
	//	if(audio.paused){
	//		audio.play();
	//		this.setAttribute("class","play");
	//		//music.style.animationPlayState="running";//兼容性比较差
	//		//music.style.webkitanimationPlayState="running";//苹果兼容
	//	}else{
	//		audio.pause();
	//		this.setAttribute("class","");
	//		//this.style.animationPlayState="paused";
	//		//this.style.webkitanimationPlayState="paused";
	//	}
	//}
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			}else{
			audio.pause();
			this.setAttribute("class","");
			}
	},false);
	page1.addEventListener("touchstart",
        function(event){
            page1.style.display="none";
            page2.style.display="block";
            page3.style.display="block";
            page3.style.top="100%"

            rollPages();
        },
        false
    );

    var pages = [page2, page3];
    var currentPageIndex = 0;

    function rollPages() {
        pages[currentPageIndex].style.display = "none";
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        var nextPage = pages[currentPageIndex];

        nextPage.style.display = "block";
        nextPage.style.top = "100%";

        setTimeout(function () {
            pages[(currentPageIndex - 1 + pages.length) % pages.length].setAttribute("class", "page fadeOut");
            nextPage.setAttribute("class", "page fadeIn");

            setTimeout(rollPages, 5500); // Adjust the delay as needed
        }, 500);
    }
}