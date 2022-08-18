function createList(items) {
  const list = document.querySelector('.list');
  list.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    list.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`);
  }
}



export default createList;