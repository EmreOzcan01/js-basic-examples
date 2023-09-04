const num = document.querySelector('#num')
const conclusion = document.querySelector('#conclusion')
const btn = document.querySelector('#btn')

btn.addEventListener(
    'click',
    e => {
        let count = 0
        
        if (num.value == '') {
            
            conclusion.textContent = 'Pls enter a value'

        } else if (+num.value === 2) {
            conclusion.textContent = num.value + ' is prime number'
        } else if (+num.value === 1) {
            console.log('nabe')
            conclusion.textContent = num.value + ' is not prime number'
        } else {

            if (+num.value % 2 === 0) {
                conclusion.textContent = num.value + ' is not prime number'
            } else {

                for (let i = 3; i < num.value; i += 2) {
                    
                    if (+num.value % i === 0) {
                        conclusion.textContent = num.value + ' is not prime number'
                        count++
                        break
                    }
                    
                }
                
                (count == 0)
                ? conclusion.textContent = num.value + ' is prime number' : ''
                
            }
        }

        
    }
)

