import { container, modal, close } from './index';

export function addCart() {
  const newCard = document.createElement('div');
  const title = document.createElement('h2');
  const input = document.createElement('input');
  const text = document.createElement('p'); 
  const addText = document.createElement('button');
  const deleteCard = document.createElement('button');
  const moreInfo = document.createElement('button');
  const textModal = document.getElementById('content-modal');

  
  input.addEventListener('keypress', function(event) {
  
    if (!input.value) {
      input.placeholder = 'please write something';
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
      input.placeholder = 'write something';
      return;
    }    
    text.classList.toggle('text');
    text.innerText= input.value;
    input.classList.toggle('none');
    addText.classList.toggle('none');
  });
    
  deleteCard.addEventListener('click', function() {
    newCard.remove();
  });
  
  moreInfo.addEventListener('click', function() {
    textModal.innerText = text.innerText;
    textModal.appendChild(close);
    modal.style.display = 'block';
  });
 

  text.className = 'none';
  addText.innerText = 'добавить текст';
  addText.className = 'button';
 
  deleteCard.className = 'button';
  deleteCard.innerText = 'Удалить';

  input.className = 'input';
  input.innerText = input.value;
  input.placeholder = 'type something';

  title.innerText = 'card title';
  title.className = 'card__title';

  moreInfo.className = 'button';
  moreInfo.innerText = 'Подробнее';
 
  newCard.className = 'loader';
  container.appendChild(newCard);

  const children = container.children;
  let totalWidth = container.children[0].offsetWidth;

  for (let i = 0; i < children.length; i++) {
    totalWidth += parseInt(children[i].offsetWidth, 10);
  }

  if (container.clientWidth - totalWidth < 0) {
    container.style.justifyContent = 'start';
  }

  setTimeout(() => {
    newCard.className = 'card';
    newCard.appendChild(title);
    newCard.appendChild(input);
    newCard.appendChild(addText);
    newCard.appendChild(text);
    newCard.appendChild(moreInfo);
    newCard.appendChild(deleteCard);
  }, 3000);
}
