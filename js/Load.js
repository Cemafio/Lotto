function move(){
	var elem= document.getElementById("MyBar");
	var width= 10;
	const btn = document.querySelector('.btnOpen');
	const MyProgress = document.querySelector('#MyProgress')

	var id= setInterval(frame,10);

	function frame(){	
		if (width>=100){
			clearInterval(id);
			btn.style.display = "inline";
			MyProgress.style.display = 'none'

			// btn.addEventListener('click', function () {
				// setTimeout(window.close,100);	
			// })
		}else{
			width++;
			elem.style.width=width+'%';
			elem.innerHTML=width*1+'%';
		}
	}
};
