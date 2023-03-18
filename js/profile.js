checkAuth();

const btnSubmit = document.getElementById('btn-submit');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputAddress = document.getElementById('address');

btnSubmit.addEventListener('click', () => {
  const data = {
    name: inputName.value.trim(),
    phone: inputPhone.value.trim(),
    address: inputAddress.value.trim(),
  };

  const token = localStorage.getItem(FRONTEND_ACCESS_TOKEN);
  fetch(`${BASE_URL}auth/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      window.location.href = 'index.html';
    })
    .catch((err) => console.log(err));
});
