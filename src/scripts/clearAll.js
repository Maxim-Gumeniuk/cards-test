import { container, card, addAll } from './index';
import { scroll } from './addAllCard';

export function clearAll() {
  while(container.children.length > 1) {
    container.removeChild(...card);
  }

  addAll.disabled = true;
  window.removeEventListener('scroll', scroll, false);
}