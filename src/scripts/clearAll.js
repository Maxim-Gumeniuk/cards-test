import { container, card, addAll } from './index';
import { scroll } from './addAllCard';

export function clearAll() {
  while(container.children.length > 1) {
    container.removeChild(...card);
  }

  addAll.disabled = true;
  addAll.style.checked.background = 'f3f3f3';
  window.removeEventListener('scroll', scroll, false);
}