import refs from './utils/refs';
import { STORAGE_KEY, store } from './utils/variables';
import { saveLS, loadLS } from './utils/localStorage';
import { checkBtnDisabled } from './utils/checkBtnDisabled';

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

const dataLS = loadLS(STORAGE_KEY);
checkBtnDisabled(dataLS);

if (dataLS !== undefined) {
  store.email = dataLS.email || '';
  store.message = dataLS.message || '';
  refs.form.elements.email.value = store.email;
  refs.form.elements.message.value = store.message;
}

function onFormInput(event) {
  const { name, value } = event.target;
  if (name !== 'email' && name !== 'message') return;

  store[name] = value.trim();
  saveLS(STORAGE_KEY, store);
  checkBtnDisabled(store);
}

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = store;
  if (email === '' || message === '') {
    alert('Please fill in all the fields!');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  console.log(store);
  store.email = '';
  store.message = '';
  checkBtnDisabled(store);
  refs.form.reset();
}
