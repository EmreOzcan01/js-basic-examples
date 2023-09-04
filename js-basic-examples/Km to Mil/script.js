const input1 = document.querySelector('#input1')
const select = document.querySelector('#unit')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')

btn.addEventListener(
    'click',
    e => {
        if (input1.value == '' || select.value == '') {
            conclusion.textContent = 'Pls enter a number or select unit'
        } else {
            if (select.value == 0) {
                conclusion.textContent = input1.value + ' Mil = ' + input1.value * 1.609344 + ' Km'
            } else {
                conclusion.textContent = input1.value + ' Km  = ' + input1.value * 0.6213712 + ' Mil'
            }
        }
    }
)


