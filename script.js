const firstNumb = prompt('Enter first number');
const operation = prompt("Enter operator");
const secondNumb = prompt('Enter second number');

const isNumb1 = isNaN(Number(firstNumb))
const isNumb2 = isNaN(Number(secondNumb))

if(!isNumb1 && !isNumb2) {

    if (firstNumb !== null && operation !== null && secondNumb !== null) {
        if (operation === '+') {
            alert(`Ваш результат ${ Number(firstNumb) + Number(secondNumb)}`)
        } else if (operation === '-') {
            alert(`Ваш результат ${Number(firstNumb) - Number(secondNumb)}`)
        } else if (operation === '*') {
            alert(`Ваш результат ${Number(firstNumb) * Number(secondNumb)}`)
        } else if (operation === '/') {
            alert(`Ваш результат ${Number(firstNumb) / Number(secondNumb)}`)
        } else {
            alert("You entered an invalid operator")
        }
    } else alert('Такой операции не существует')
} else {alert('Yuu did not enter numbers')}

