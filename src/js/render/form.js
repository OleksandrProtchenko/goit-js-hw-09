import { loadLS } from '../utils/localStorage';
import { STORAGE_KEY } from '../utils/variables';
import refs from '../utils/refs';
import { checkBtnDisabled } from '../utils/checkBtnDisabled';

export function renderForm() {
  const savedData = loadLS(STORAGE_KEY);

  if (savedData === undefined) {
    return false; // Це для майбутнього масштабування
  }
  checkBtnDisabled(savedData);
  refs.form.elements.email.value = savedData?.email || '';
  refs.form.elements.message.value = savedData?.message || '';
  return true; // Це для майбутнього масштабування
}
