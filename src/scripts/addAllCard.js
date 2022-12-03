import { addCart } from './addCard';
import { container, addAll } from './index';

export function addAllCart() {
  let i = container.offsetWidth * container.offsetHeight;

  while(i >= 0) {
    addCart();
    i -= container.childElementCount * 250 * 10;
  }

  window.addEventListener('scroll', scroll);

  addAll.disabled = true;

}

export function scroll() {
  const documentRect = document.documentElement.getBoundingClientRect();
    
  if (container.offsetWidth > 650 && documentRect.bottom < container.clientHeight + 20) {
    addCart();
  } else if (documentRect.right < container.offsetWidth + 20) {
    addCart();
  }
}