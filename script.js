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

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  const maxCharacters = 500;

  // Initialize the counter with the maximum number of characters
  counter.textContent = `Characters left: ${maxCharacters}`;

  textarea.addEventListener('input', () => {
    const remainingCharacters = maxCharacters - textarea.value.length;
    // Update the counter text and style
    counter.textContent = `Characters left: ${remainingCharacters}`;
    counter.style.color = remainingCharacters >= 0 ? 'black' : 'red';
  });
});
