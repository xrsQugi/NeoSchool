let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) =>{
		console.log('entry :>> ', entry);
		if(entry.isIntersecting){
			entry.target.classList.add('show');
		} else{
			entry.target.classList.remove('show');
		}
	})
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});