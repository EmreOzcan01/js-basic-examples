const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')

btn.addEventListener(
    'click',
    e => {
        const c = Math.sqrt(input1.value ** 2 + input2.value ** 2)
        
        if (input1.value == '' || input2.value == '') {
            conclusion.textContent = 'Pls enter a values'
        } else {
            conclusion.textContent = `${input1.value}² + ${input2.value}² = ${c}²`
        }
    }
)

