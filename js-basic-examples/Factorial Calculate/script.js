const num = document.querySelector('#num')
const btn = document.querySelector('#btn')
const conclusion = document.querySelector('#conclusion')

btn.addEventListener(
    'click',
    e => {
        conclusion.textContent =  ''
        let sum = 1

        if (num.value == '') {
            conclusion.textContent = 'Pls enter a value'
        } else if (num.value == 1 || num.value == 0) {
            conclusion.textContent += num.value + '! '
            conclusion.textContent += '= ' + sum
        } else if (num.value < 0 || !(parseInt(num.value) == parseFloat(num.value))) {
            conclusion.textContent += 'Negative and Fractional Numbers Not Have a Factorial'
        } else {
            for (let i = num.value; i > 1; i--) {
                sum *= i

                if (i == 2) {
                    conclusion.textContent += i + '! '
                } else {
                    conclusion.textContent += i + '! + '
                }
    
            }
            conclusion.textContent += '= ' + sum
        }

        

        
    }
)

