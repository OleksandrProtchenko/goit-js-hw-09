import { saveLS } from '../utils/localStorage';
import { normalizeData } from '../utils/normalizeForm';
import { STORAGE_KEY } from '../utils/variables';
import refs from '../utils/refs';
import { checkBtnDisabled } from '../utils/checkBtnDisabled';

export function onFormInput(event) {
  event.preventDefault();

  const formData = new FormData(refs.form);
  const data = Object.fromEntries(formData);
  const normalizedData = normalizeData(data);

  saveLS(STORAGE_KEY, normalizedData);
  checkBtnDisabled(normalizedData);
}
