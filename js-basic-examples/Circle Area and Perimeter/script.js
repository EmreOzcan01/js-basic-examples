const radius = document.querySelector('#radius')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')
const pi = 3.14

btn.addEventListener(
    'click',
    e => {
        const area = pi * radius.value ** 2
        const perimeter = 2 * pi * radius.value
        
        if (radius.value == '') {
            conclusion.textContent = 'Pls enter a value'
        } else {
            conclusion.innerHTML = `Area: ${pi} * ${radius.value}² = ${area}
            <br>
            Perimeter: 2 * ${pi} * ${radius.value} = ${perimeter}`
        }
    }
)