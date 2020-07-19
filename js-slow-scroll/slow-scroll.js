   
   arrowTop.onclick = function() {
      window.scrollTo( {
      	top: 0,
 			 behavior: 'smooth',
});
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

   let timeoutId;
    window.addEventListener('scroll', function() {
		if(timeoutId){
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
		clearTimeout(timeoutId)
		}
		timeoutId=setTimeout(function(){arrowTop.hidden=true;},2000)
	
    });



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



 