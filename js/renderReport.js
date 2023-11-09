
//получение функции форматирования даты(reformatDate)
import { reformatDate} from "./formatData.js";
//таблица 
const reportOperationList=document.querySelector('.report__operation-list');
//тип операции
const typeOperation={
    income:'доход',
    expenses:'расход',
  };
//функция рендеринга данных
export const renderReport=(data)=>{
    reportOperationList.textContent='';
    const reportRows=data.map(({category,amount,description,date,type})=>{
      const reportRow=document.createElement('tr');
      reportRow.classList.add('report__row'); 
      reportRow.innerHTML=`
      <td class="report__cell">${category}</td>
      <td class="report__cell" style="text-align:right">${amount.toLocaleString()}₽</td>
      <td class="report__cell">${description}</td>
      <td class="report__cell">${reformatDate(date)}</td>
      <td class="report__cell">${typeOperation[type]}</td>
      <td class="report__action-cell">
        <button
          class="report__button report__button_table">&#10006;</button>
      </td>`
      return reportRow;
    });
    reportOperationList.append(...reportRows);
}