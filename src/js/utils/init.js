import { onFormInput } from '../components/inputForm';
import { onFormSubmit } from '../components/submitForm';
import refs from './refs';
import { renderForm } from '../render/form';

export function init() {
  refs.form.addEventListener('input', onFormInput);
  refs.form.addEventListener('submit', onFormSubmit);

  renderForm();
}
