window.onload = function () {
  let existUserName = ['admin', 'user'];
  let usernameInput = document.getElementById('username');
  let usernameError = document.getElementById('username-error');

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (validUser()){
      window.alert('Poprawnie wysłany formularz');
    }
  });

  function validUser() {
    let userValid = true;

    if (!checkRequiredInput(usernameInput)) {
      userValid = false;
      setErrorText().textContent = 'Podaj nazwę użytkownika';
    } else if (!checkMiniMaxLength(usernameInput, 3, 12)) {
      userValid = false;
      setErrorText('Nazwa uzytkownika powinna miec od 3 do 12 znakow');
    } else if (checkExistUsername(usernameInput)) {
      userValid = false;
      setErrorText('Nazwa uzytkownika pozostala juz wykorzystana');
    } else {
      usernameError.setAttribute('hidden', '');
    }


    return userValid
  }

  function checkRequiredInput(input) {
    return input.value.length > 0;
  }

  function checkMiniMaxLength(input, min,max) {
    return input.value.length >= min && input.value.length <= max;
  }

  function checkUserName(input) {
    return existUserName.includes(input.value);
  }

  function setErrorText(msg) {
    usernameError.textContent = msg;
    usernameError.removeAttribute('hidden');
  }

};