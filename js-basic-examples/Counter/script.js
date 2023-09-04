const decrease = document.querySelector('#decrease')
const reset = document.querySelector('#reset')
const increase = document.querySelector('#increase')
const num = document.querySelector('#number')

decrease.addEventListener(
    'click',
    e => {
        num.textContent--
    }
)

reset.addEventListener(
    'click',
    e => {
        num.textContent = 0
    }
)

increase.addEventListener(
    'click',
    e => {
        num.textContent++
    }
)

