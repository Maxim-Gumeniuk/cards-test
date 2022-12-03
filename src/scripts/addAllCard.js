import { addCart } from './addCard';
import { container, addAll } from './index';
import { scroll } from './onScroll';

export function addAllCart() {
  let i = document.documentElement.offsetWidth * document.documentElement.offsetHeight;
  
  while(i >= 0) {
    addCart();
    i -= container.childElementCount * container.childElementCount * container.children[0].offsetWidth * 30;
  }

  window.addEventListener('scroll', scroll);
  addAll.disabled = true;
}
