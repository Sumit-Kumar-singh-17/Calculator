const input = document.getElementById('input1');
const buttons = document.querySelectorAll('.box');

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        const buttonText = button.textContent;
        
        if(buttonText === 'AC') {
            input.value = '';
        }
        else if (buttonText === 'DEL') {
            input.value = input.value.slice(0, -1);
        }
        else if(buttonText === '=') {
            try{
                // let result = eval(input.value);
                // result = parseFloat(result.toFixed(4));

                // input.value = result;

                input.value = eval(input.value);

            }
            catch {
                input.value = 'Error';
            }    
        }
        else {
            input.value += buttonText;
        }
    })
    
})


// const input = document.getElementById('input1');
// const buttons = document.querySelectorAll('.box');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonText = button.textContent;

//         if (buttonText === 'AC') {
//             input.value = '';
//         } else if (buttonText === 'DEL') {
//             input.value = input.value.slice(0, -1);
//         } else if (buttonText === '=') {
//             try {
//                 input.value = eval(input.value);
//             } catch {
//                 input.value = 'Error';
//             }
//         }
//          else {
//             input.value += buttonText;
//         }
//         // else if (buttonText === Number) {
//         //     input.value = buttonText;
//         // }
//     });
// });
