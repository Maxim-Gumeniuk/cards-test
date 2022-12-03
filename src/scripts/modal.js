import { close, modal, moreInfo, textModal, text } from './index';

export function closest() {
  if (this.event.target === modal) {
    modal.style.display = 'none';
  }
} 

export function modalNone() {
  modal.style.display = 'none';
}


export function seeMoreInfo() {
  textModal.innerText = text.innerText;
  textModal.appendChild(close);
  modal.style.display = 'block';
}