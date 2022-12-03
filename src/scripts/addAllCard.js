import { addCart } from './addCard';
import { container, addAll } from './index';
import { scroll } from './onScroll';

export function addAllCart() {
  let i = container.offsetWidth * container.offsetHeight;
  
  while(i >= 0) {
    addCart();
    i -= container.childElementCount * container.childElementCount * container.children[0].offsetHeight * container.children[0].offsetWidth;
  }

  window.addEventListener('scroll', scroll);
  addAll.disabled = true;
}
