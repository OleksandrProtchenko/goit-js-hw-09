import refs from './refs';

export function checkBtnDisabled(data) {
  if (data.email !== '' && data.message !== '') {
    refs.btn.disabled = false;
  } else {
    refs.btn.disabled = true;
  }
}
