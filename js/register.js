checkAuth();

const btnSubmit = document.getElementById('btn-submit');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputAddress = document.getElementById('address');

btnSubmit.addEventListener('click', () => {
  const data = {
    name: inputName.value.trim(),
    email: inputEmail.value.trim(),
    password: inputPassword.value.trim(),
    phone: inputPhone.value.trim(),
    address: inputAddress.value.trim(),
  };

  fetch(`${BASE_URL}users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      login({
        email: data.email,
        password: data.password,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
