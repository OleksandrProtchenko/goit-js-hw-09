import refs from './refs';

export function checkBtnDisabled(data) {
  if (data === undefined) {
    return;
  }

  const { email, message } = data;

  email === '' ? (refs.btn.disabled = true) : (refs.btn.disabled = false);
  message === '' ? (refs.btn.disabled = true) : (refs.btn.disabled = false);
}
