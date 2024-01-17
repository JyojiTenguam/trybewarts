document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('trybewarts-login');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit-btn');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const Email = 'tryber@teste.com';
    const Password = '123456';

    const isValidCredentials = emailInput.value === Email && passwordInput.value === Password;

    alert(isValidCredentials ? 'Olá, Tryber!' : 'Email ou senha inválidos.');
  });

  loginForm.addEventListener('input', () => {
    submitButton.disabled = !emailInput.checkValidity() || !passwordInput.checkValidity();
  });
});

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function setupPage() {
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
