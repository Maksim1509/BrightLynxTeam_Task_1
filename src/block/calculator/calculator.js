/* eslint-disable no-alert */
const additionBtn = document.querySelector('.calculator__btn');
const firstNum = document.getElementById('first_num');
const secondNum = document.getElementById('second_num');

additionBtn.addEventListener('click', () => {
  const result = Number(firstNum.value) + Number(secondNum.value);
  console.log(result);
  alert(`Результат: \n\n ${result}`);
  firstNum.value = '';
  secondNum.value = '';
});
