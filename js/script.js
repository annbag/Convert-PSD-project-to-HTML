const registerBtn = document.getElementById('register-btn');
const letsGo = document.getElementById('letsGo');





registerBtn.addEventListener('click', function() {
	let country = document.forms['myForm']['country'].value;
	let approval = document.getElementById('checkbox').checked;

	if (country !== "" && approval == true) {
		document.querySelector('.modal-wrap').classList.add('active');
		document.querySelector('.mainView').classList.add('hidden');		
	}
})

letsGo.addEventListener('click' ,function() {
	document.querySelector('.modal-wrap').classList.remove('active');
	document.querySelector('.mainView').classList.remove('hidden');
})