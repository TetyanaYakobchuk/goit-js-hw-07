//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');
//console.log(inputName);
//console.log(outputName);
inputName.addEventListener('input', () => {
     console.log(inputName.value);
     outputName.textContent = inputName.value;
     if(inputName.value === '') outputName.textContent = 'незнакомец'
});