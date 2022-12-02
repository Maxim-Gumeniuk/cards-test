import { addCart } from './addCard';
import { deleteCard } from './deleteCard';
import { clearAll } from './clearAll';
import { addAllCart } from './addAllCard';

const addButon = document.getElementById('add');
const deleteButton = document.getElementById('delete');
export const container = [...document.getElementsByClassName('container')][0];
const clearButton = document.getElementById('clear');
export const card = document.getElementsByClassName('card');
export const addAll = document.getElementById('addAll');



addButon.addEventListener('click',addCart);

deleteButton.addEventListener('click', deleteCard);

clearButton.addEventListener('click', clearAll);

addAll.addEventListener('change', addAllCart);
