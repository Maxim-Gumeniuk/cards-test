import { container, card, addAll } from './index';

export function clearAll() {
  while(container.children.length > 1) {
    container.removeChild(...card);
  }

  addAll.disabled = true;

}