export function normalizeData(data) {
  data.email = data.email.trim();
  data.message = data.message.trim();
  return data;
}
