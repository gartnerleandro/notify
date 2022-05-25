export function getLocalValue(name) {
  const localData = JSON.parse(localStorage.getItem(name));

  return localData ? localData.value : null;
}

export function setLocalValue(name, value) {
  localStorage.setItem(name, JSON.stringify({ value }));
}

export function removeLocalElement(name) {
  localStorage.removeItem(name);
}
