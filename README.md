# A Music Page

Page URL: https://daniel-lin-s.github.io/greet-card/


## The user interface
Volume up and down: 

<img src="img/volume_up.png" width="100"/> <img src="img/volume_down.png" width="100"/>

Click the disk to start playing.

## Develouper options

### Build Live page
Go to </b>Settings<b> of the repository, click </b>Pages<b> section in left sidebar. Select the branch and folder `/ (root)`, click </b>Save<b> button. After a while you will see a block displaying "Your site is live at `url`". Copy the url and open in a new tab.

### Change Music
Replace the `song.mp3` file in `resources/audio` to change the background music.

### Change Image


### Music Player
var music=document.getElementById("music");

	var audio=document.getElementsByTagName("audio")[0];
	
	var n11=document.getElementById("n1");//加音量
	
	var n12=document.getElementById("n2");//减音量
	
	audio.volume = 0.6;

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
		
	},false)

	music.addEventListener("touchstart",function(event){
	
		if(audio.paused){
		
			audio.play();
			
			this.setAttribute("class","play");
			
			}else{
			
			audio.pause();
			
			this.setAttribute("class","");
			
			}
			
	},false);
	
	page1.addEventListener("touchstart",function(event){
	
		page1.style.display="none";
		
		page2.style.display="block";
		
		page3.style.display="block";
		
		page3.style.top="100%"

		setTimeout(function(){
		
			page2.setAttribute("class","page fadeOut");
			
			page3.setAttribute("class","page fadeIn");
			
		},5500)
		
	},false);
