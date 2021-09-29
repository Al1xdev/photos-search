export const saveToLocalStorage = (str) => {
  let history = [];
  history = JSON.parse(localStorage.getItem('recent-searches')) || [];
  history.push(str);
  localStorage.setItem('recent-searches', JSON.stringify(history));
};
