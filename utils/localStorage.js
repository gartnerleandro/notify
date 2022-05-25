export function getLocalValue(name) {
  const localData = JSON.parse(window.localStorage.getItem(name));

  return localData ? localData.value : null;
}

export function setLocalValue(name, value) {
  window.localStorage.setItem(name, JSON.stringify({ value }));
}

export function removeLocalElement(name) {
  window.localStorage.removeItem(name);
}
