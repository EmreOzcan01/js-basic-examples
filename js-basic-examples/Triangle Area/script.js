const base = document.querySelector('#input1')
const height = document.querySelector('#input2')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')

btn.addEventListener(
    'click',
    e => {
        const area = base.value * height.value / 2

        if (base.value == '' || height.value == '') {
            conclusion.textContent = 'Pls enter a values'
        } else {
            conclusion.textContent = `Area = ${base.value} * ${height.value} / 2 = ${area}`
        }
    }
)
