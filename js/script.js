const registerBtn = document.getElementById('register-btn');
const letsGo = document.getElementById('letsGo');



registerBtn.addEventListener('click', function() {
	let x = document.forms['myForm']['country'].value;
	let y = document.getElementById('checkbox').checked;

	if (x !== "") {
		if (y == true) {
			document.querySelector('.modal-wrap').classList.add('active');
			document.querySelector('.mainView').classList.add('hidden');
		}	
	}
})

letsGo.addEventListener('click' ,function() {
	document.querySelector('.modal-wrap').classList.remove('active');
	document.querySelector('.mainView').classList.remove('hidden');
})