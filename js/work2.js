document.addEventListener("DOMContentLoaded", function(){
	
	
	 //menu list
//	var companybtn= document.querySelector("#firma");
//	var menu= document.querySelector("#menu");
//	var arrowUp=document.querySelector("#arrowUp")
//	console.log(companybtn);
//	companybtn.addEventListener("mouseover", function(){
//		
//		menu.style.display="block";
//		arrowUp.style.display="block";
//		
//	});
//	
//	companybtn.addEventListener("mouseout", function(){
//		
//		menu.style.display= "none";
//		arrowUp.style.display="none";
//	}); 
	
	
	// znikające divy  	
	var box1= document.querySelector("#box1");
	var label1=document.querySelector("#label1");
	var span1= document.querySelector(".chair");
	var hr1= document.querySelector("#box1 hr");
	
	var box2= document.querySelector("#box2");
	var label2=document.querySelector("#label2");
	var span2= document.querySelector("#box2 > span");
	var hr2= document.querySelector("#box2 hr");
	
	box1.addEventListener("mouseover", function(){
		label1.style.display="none";
		span1.style.display="none";
		hr1.style.display="none";
		
	});
	
	box1.addEventListener("mouseout", function(){
		label1.style.display="block";
		span1.style.display="block";
		hr1.style.display="block";
	});
	
	box2.addEventListener("mouseover", function(){
		label2.style.display="none";
//		span2.style.display="none";
		hr2.style.display="none";
	});
		
	box2.addEventListener("mouseout", function(){
		label2.style.display="block";
//		span2.style.display="block";
		hr2.style.display="block";
	});
	
	// slider
	
	var previous = document.querySelector("#arrow1");
	var next= document.querySelector("#arrow2");
	
	var allImg= document.querySelector(".slider ul").children;
	var currentImg= 0;
	
	allImg[currentImg].classList.add("visible");
	
	next.addEventListener("click", function(){
		allImg[currentImg].classList.remove("visible");
		currentImg++;
		if(currentImg>=allImg.length){
			currentImg=0;
		}
	allImg[currentImg].classList.add("visible");
	});
	
	previous.addEventListener("click", function(){
		allImg[currentImg].classList.remove("visible");
		currentImg--;
		if(currentImg<0){
			currentImg = allImg.length-1;
		}
	allImg[currentImg].classList.add("visible");
	});
	
});

