export function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

export function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}
