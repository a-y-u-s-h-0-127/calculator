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
    if (event.key == "0" || event.key == "1"
        || event.key == "2" || event.key == "3"
        || event.key == "4" || event.key == "5"
        || event.key == "6" || event.key == "7"
        || event.key == "8" || event.key == "9"
        || event.key == "+" || event.key == "-"
        || event.key == "*" || event.key == "/"
        || event.key == "." || event.key == "%"
        || event.key == "=" || event.key == " Enter"
        || event.key == "backspace") {

        event.target.innerHTML;
        input.value += event.key;
    }


    else if (event.key === "Enter" || event.key === "=") {
        try {
            input.value = eval(input.value);
        } catch (e) {
            input.value = "Error";
        }
    }

    else if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }

    else {
        event.key = "";
    }
});


