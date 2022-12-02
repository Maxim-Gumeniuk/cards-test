import { container } from './index';

export function addCart() {
  const newCard = document.createElement('div');
  const title = document.createElement('h2');
  const input = document.createElement('input');
  const moreInfo = document.createElement('button');
  const deleteCard = document.createElement('button');
  const text = document.createElement('p'); 
  const modal = document.getElementById('myModal');
  const close = document.getElementById('close');
  const textModal = document.getElementById('content-modal');
  const addText = document.createElement('button');
  
  text.className = 'none';
  addText.innerText = 'добавить текст';
  addText.className = 'button';
  const children = container.children;
  let totalWidth = 300;

  for (let i = 0; i < children.length; i++) {
    totalWidth += parseInt(children[i].offsetWidth, 10);
  }

  if (container.clientWidth - totalWidth < 0) {
    container.style.justifyContent = 'start';
  }

  deleteCard.className = 'deleteCard';
  deleteCard.innerText = 'Удалить';

  input.className = 'input';
  input.innerText = input.value;
  input.placeholder = 'type something';

  deleteCard.addEventListener('click', function() {
    newCard.remove();
  });

  input.addEventListener('keypress', function(event) {

    if (!input.value) {
      input.placeholder = 'type';
      return;
    }   
    if (event.key === 'Enter') {
      text.classList.toggle('text');
      text.innerText= input.value;
      input.classList.toggle('none');
      addText.classList.toggle('none');
    }
  });

  addText.addEventListener('click', () => {
    if (!input.value) {
      input.placeholder = 'type';
      return;
    }    
    text.classList.toggle('text');
    text.innerText= input.value;
    input.classList.toggle('none');
    addText.classList.toggle('none');
  });

  title.innerText = 'card title';

  moreInfo.className = 'more-info';
  moreInfo.innerText = 'Подробнее';
 
  moreInfo.addEventListener('click', function() {
    textModal.innerText = text.innerText;
    textModal.appendChild(close);
    modal.style.display = 'block';
  });

  window.addEventListener('click', function() {
    if (this.event.target === modal) {
      modal.style.display = 'none';
    }
  });

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  newCard.className = 'loader';
  setTimeout(() => {
    newCard.className = 'card';
    newCard.appendChild(title);
    newCard.appendChild(input);
    newCard.appendChild(addText);
    newCard.appendChild(text);
    newCard.appendChild(moreInfo);
    newCard.appendChild(deleteCard);
  }, 3000);

  container.appendChild(newCard);
}
