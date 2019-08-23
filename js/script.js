const registerBtn = document.getElementById('register-btn');
const letsGo = document.getElementById('letsGo');


function validateForm() {
    const userName = document.forms['myForm']['userName'].value;
    const email = document.forms['myForm']['email'].value;
    const country = document.forms['myForm']['country'].value;
    const approval = document.getElementById('checkbox').checked;

    if (userName === '') {
        document.getElementById('infoName').innerHTML = 'Wpisz imię i nazwisko.';
        document.getElementById('infoName').classList.add('active');
    } else if (userName == 'Jan Kowalski') {
        document.getElementById('infoName').innerHTML = 'Użytkowanik już istnieje.';
        document.getElementById('infoName').classList.add('active');
    } else if (email === '') {
        document.getElementById('infoMail').innerHTML = 'Wpisz e-maila.';
        document.getElementById('infoMail').classList.add('active');
    } else if (country === '') {
        document.getElementById('infoCountry').innerHTML = 'Wybierz kraj.';
        document.getElementById('infoCountry').classList.add('active');
    } else if (approval == false) {
        document.getElementById('infoApproval').innerHTML = 'Trzeba wyrazić zgodę.';
        document.getElementById('infoApproval').classList.add('active');
    } else {
        document.querySelector('.modal-wrap').classList.add('active');
        document.querySelector('.mainView').classList.add('hidden');
    }
}

registerBtn.addEventListener('click', validateForm);

letsGo.addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.mainView').classList.remove('hidden');
})
