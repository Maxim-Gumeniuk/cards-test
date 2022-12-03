import { addCart } from './addCard';
import { deleteCard } from './deleteCard';
import { clearAll } from './clearAll';
import { addAllCart } from './addAllCard';
import { closest, modalNone, seeMoreInfo } from './modal';

const addButon = document.getElementById('add');
const deleteButton = document.getElementById('delete');
export const container = [...document.getElementsByClassName('container')][0];
const clearButton = document.getElementById('clear');
export const card = document.getElementsByClassName('card');
export const addAll = document.getElementById('addAll');
export const modal = document.getElementById('myModal');
export const close = document.getElementById('close');
export const textModal = document.getElementById('content-modal');
export const text = document.createElement('p'); 

addButon.addEventListener('click',addCart);

deleteButton.addEventListener('click', deleteCard);

clearButton.addEventListener('click', clearAll);

addAll.addEventListener('change', addAllCart);

window.addEventListener('click', closest);

close.addEventListener('click', modalNone);

