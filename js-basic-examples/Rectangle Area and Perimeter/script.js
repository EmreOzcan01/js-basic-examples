const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')

btn.addEventListener(
    'click',
    e => {
        const area = input1.value * input2.value
        const perimeter = input1.value * 2 + input2.value * 2
        
        if (input1.value == '' || input2.value == '') {
            conclusion.innerHTML = 'Pls enter a values'
        } else {
            conclusion.innerHTML = `Area = ${input1.value} * ${input2.value} = ${area}
            <br>
            Perimeter = ${input1.value} * 2 + ${input2.value} * 2 = ${perimeter}`
        }
    }
)
