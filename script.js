const firstNumb = Number(prompt('Enter first number'));
const operation = prompt("Enter operator");
const secondNumb = Number(prompt('Enter second number'));

const isNumb1 = isNaN(firstNumb)
const isNumb2 = isNaN(secondNumb)

if(isNumb1 === false && isNumb2 === false) {

    if (firstNumb !== null && operation !== null && secondNumb !== null) {
        if (operation === '+') {
            alert(`Ваш результат ${firstNumb + secondNumb}`)
        } else if (operation === '-') {
            alert(`Ваш результат ${firstNumb - secondNumb}`)
        } else if (operation === '*') {
            alert(`Ваш результат ${firstNumb * secondNumb}`)
        } else if (operation === '/') {
            alert(`Ваш результат ${firstNumb / secondNumb}`)
        } else {
            alert("You entered an invalid operator")
        }
    } else alert('Такой операции не существует')
} else {alert('Yuu did not enter numbers')}

