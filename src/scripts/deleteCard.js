import { container, card, addAll } from './index';

export function deleteCard() {
  container.removeChild(card[card.length - 1]);
  addAll.disabled = false;   
}