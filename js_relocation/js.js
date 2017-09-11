var cub=document.getElementsByClassName('block');
cub[0].onclick=Wd;

function Wd(){
	cub[0].style.width="300px";
	
}
function Red(){
	
	cub[0].style.background="red"
	
}


cub[0].addEventListener('transitionend',Red);



window.location.assign("http://site-in.top")