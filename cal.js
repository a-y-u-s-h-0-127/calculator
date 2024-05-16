let number = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (element) => {
        if (element.target.innerHTML === '=') {
            number = eval(number);
            document.querySelector('input').value = number;
        }

        else if (element.target.innerHTML === 'AC') {
            number = "";
            document.querySelector('input').value = number;
        }

        else if (element.target.innerHTML === document.getElementById('arrow-style').innerHTML) {
            number = number.substring(0, number.length - 1);
            document.querySelector('input').value = number;

        }

        else if (element.target.innerHTML === '%') {
            let input = document.querySelector('input');
            let newValue;

            newValue = number / 100;
            input.value = newValue;
        }


        else {
            number = number + element.target.innerHTML;
            document.querySelector('input').value = number;
        }
    });
});

function percentage() {

}


document.body.addEventListener('keydown', (event) => {
    let input = document.getElementById('calculator');
    event.target.innerHTML;
    input.value += event.key;
});