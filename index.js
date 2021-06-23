const displayValueBefore = document.getElementById('val-before')
const displayValueActual = document.getElementById('val-actual')
const buttonNumbers = document.querySelectorAll('.number')
const buttonOperators = document.querySelectorAll('.operator')

const display = new Display(displayValueBefore, displayValueActual);


buttonNumbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach(button => {
    button.addEventListener('click', () => 
    {
        console.log(button.value);
        display.compute(button.value)});
})