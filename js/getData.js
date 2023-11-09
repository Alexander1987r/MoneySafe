
const API_URL='https://opposite-bevel-lightyear.glitch.me/api';
//функция getData
export const getData= async (url)=>{
    try{
      const response=await fetch(`${API_URL}${url}`); 
      if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
      }  
      return await response.json();
    } catch (error) {
      console.error('Ошибка при получений данных:',error);
      throw error;
    }
}