const registerBtn = document.getElementById('register-btn');
const letsGo = document.getElementById('letsGo');



function validateForm() {
	const userName = document.forms['myForm']['userName'].value;
	const email = document.forms['myForm']['email'].value;
	const country = document.forms['myForm']['country'].value;
	const approval = document.getElementById('checkbox').checked;

	if (userName === '') {
		document.getElementById('infoName').innerHTML = 'You should write name and surmane.';
	} else if (userName == 'Jan Kowalski') {
		document.getElementById('infoName').innerHTML = 'User already exists';
	} else if (email === '') {
		document.getElementById('infoMail').innerHTML = 'You should write e-mail.';
	} else if (country === '') {
		document.getElementById('infoCountry').innerHTML = 'You should choose country.';
	} else if (approval == false) {
		document.getElementById('infoApproval').innerHTML = 'You should agree.';
	} 
	// else 

	// 	document.querySelector('.modal-wrap').classList.add('active');
	// 	document.querySelector('.mainView').classList.add('hidden');		
}

registerBtn.addEventListener('click', validateForm );

letsGo.addEventListener('click' ,function() {
	document.querySelector('.modal-wrap').classList.remove('active');
	document.querySelector('.mainView').classList.remove('hidden');
})