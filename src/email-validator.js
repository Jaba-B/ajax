/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-mixed-operators */
import { sendRequest } from '../request';

export const validator = setTimeout(() => {
  const parent = document.getElementById('app-container');
  const form = parent.children[4].children[0].children[2];
  const btn = parent.children[4].children[0].children[2].children[1];
  const input = parent.children[4].children[0].children[2].children[0];
  btn.addEventListener('click', () => {
    const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
    const email = input.value;
    const ending = email.substring(email.indexOf('@') + 1);
    const start = email.substring(0, email.indexOf('@'));
    if (ending === validEmailEndings[0] && start.length > 0
            || ending === validEmailEndings[1] && start.length > 0
            || ending === validEmailEndings[2] && start.length > 0) {
      localStorage.setItem('email', email);
      if (btn.innerHTML == 'SUBSCRIBE') {
        input.style.display = 'none';
        btn.style.height = '42px';
        btn.innerHTML = 'UNSUBSCRIBE';
        form.style.justifyContent = 'center';
      } else {
        input.style.display = 'inline-block';
        btn.style.height = '42px';
        btn.innerHTML = 'SUBSCRIBE';
        form.style.justifyContent = 'space-between';
        localStorage.removeItem('email');
        input.value = '';
      }
      sendRequest(email);
    } else {
      alert('false');
    }
    const emailInput = document.querySelector('added-section__email-btn');
    emailInput.style.display = 'none';
  }, false);
}, 1000);
