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

  text.className = 'none';
  deleteCard.className = 'deleteCard';
  deleteCard.innerText = 'Удалить';

  input.className = 'input';
  input.innerText = input.value;



  deleteCard.addEventListener('click', function() {
    newCard.remove();
  });

  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      text.classList.toggle('text');
      text.innerText= input.value;
      input.classList.toggle('none');
    }
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
    newCard.appendChild(text);
    newCard.appendChild(moreInfo);
    newCard.appendChild(deleteCard);
  }, 3000);


  container.appendChild(newCard);
}
