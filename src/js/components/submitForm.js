import { normalizeData } from '../utils/normalizeForm';
import { STORAGE_KEY } from '../utils/variables';
import refs from '../utils/refs';

export function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(refs.form);
  const data = Object.fromEntries(formData);
  const normalizedData = normalizeData(data);
  const { email, message } = normalizedData;
  if (email === '' || message === '') {
    alert('Please fill in all the fields!');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  refs.btn.disabled = true;
  console.log(normalizedData);
  refs.form.reset();
}
