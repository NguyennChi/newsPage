checkAuth();

const btnSubmit = document.getElementById('btn-submit');
const inputPasswordCurrent = document.getElementById('password_current');
const inputPassword = document.getElementById('password');
const inputPasswordConfirmation = document.getElementById('password_confirmation');

btnSubmit.addEventListener('click', () => {
  const data = {
    password_current: inputPasswordCurrent.value.trim(),
    password: inputPassword.value.trim(),
    password_confirmation: inputPasswordConfirmation.value.trim(),
  };

  const token = localStorage.getItem(FRONTEND_ACCESS_TOKEN);
  fetch(`${BASE_URL}auth/change-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err);
    });
});
