//импорт функции проверки введенной суммы
import { convertStringNumber } from "./convertStringNumber.js";
//импорт билиотеки со скроллбаром
import {OverlayScrollbars} from "./overlayscrollbars.esm.min.js";

//форма
const financeForm=document.querySelector('.finance__form');
//поле inputa суммы
const financeInput=financeForm.querySelector('.finance__input--amount');
const financeAmount=document.querySelector('.finance__amount');
//модальное окно
const financePopUp=document.querySelector('.report');
//тогл открытия модального окна
const financeOpenButton=document.querySelector('.finance__report');
//тогл закрытия модального окна
const financeCloseButton=document.querySelector('.report__close');



let amount=0;
financeAmount.textContent=amount;
//обработчик события при отправки
financeForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();

  const typeOperation=evt.submitter.dataset.typeOperation;
  const changeAmount=Math.abs(convertStringNumber(financeInput.value));
  
  if(typeOperation==='income'){
    amount+=changeAmount;
  }
  if(typeOperation==='expenses'){
    amount-=changeAmount;
  }
  financeAmount.textContent=`${amount.toLocaleString()}₽`;
});
//обработчик события при клике (открыть)
financeOpenButton.addEventListener('click',()=>{
  financePopUp.classList.add('report__open');
  //обработчик события при клике (закрыть через ESC)
  document.addEventListener('keydown',(evt)=>{
  if(evt.keyCode===27){
    financePopUp.classList.remove('report__open');
  }
  });
  
  //обработчик событий при клике на любую область кроме модального окна + тогла закрытия + тогла открытия
  document.addEventListener('click',({target})=>{
   if(target.closest('.report__close') || (!target.closest('.report') && !target.closest('.finance__report'))){
    financePopUp.classList.remove('report__open'); 
  }
  }); 
});





//инициализация скролбара
OverlayScrollbars(financePopUp,{
  overflow: {
    x: 'hidden',
  },
});