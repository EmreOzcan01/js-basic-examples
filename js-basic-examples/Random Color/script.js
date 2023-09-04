const btn = document.querySelector('#btn')
const code = '0A1B2C3456D7E8F9'

btn.addEventListener(
    'click',
    e => {
        let hexcode = '#'
        for (let i = 0; i < 6; i++) {
            const num = Math.floor(Math.random() * 15.99)
            hexcode += code[num]
        }
        document.body.style.backgroundColor = hexcode
    }
)


