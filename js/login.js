checkAuth();

const btnSubmit = document.getElementById('btn-submit');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

btnSubmit.addEventListener('click', () => {
  const data = {
    email: inputEmail.value.trim(),
    password: inputPassword.value.trim(),
  };

  login(data);
});
