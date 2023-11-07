export  const convertStringNumber=(str)=>{
 const noSpaceStr=str.replace(/\s+/g,'');//исключаем пробелы
 const num=parseFloat(noSpaceStr);//приводим к числу

 if(!isNaN(num) && isFinite(num)){
    return num;
 } else {
    return false;
 }
};