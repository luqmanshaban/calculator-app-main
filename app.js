

const container = document.querySelector('.container');
const btns = document.querySelector('.btns')
const buttons = Array.from(document.querySelectorAll('.buttons'))
const button = document.querySelectorAll('.button')
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const del = document.getElementById('del')


const theme = document.querySelector('.theme');
const result = document.querySelector('.result');
const numerics = document.querySelector('.numerics');

const theme1 = document.getElementById('one');
const theme2 = document.getElementById('two');
const theme3 = document.getElementById('three');

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')





// ##############################################
theme1.addEventListener('click', () => {
    btn1.classList.remove('active');
    btn2.classList.remove('active')
    btn3.classList.remove('active');


    // ###### STYLE ########
    container.style.backgroundColor = ' hsl(222, 26%, 31%)';
    theme.style.backgroundColor = ' hsl(222, 26%, 31%)';
    theme.style.color = 'aliceblue';
    btns.style.backgroundColor = 'hsl(220, 88%, 10%)'
    // #####
    result.style.backgroundColor = 'hsl(220, 88%, 10%)';
    result.style.color = 'aliceblue';
    // #####
    buttons.forEach( button => {
        button.style.backgroundColor = 'hsl(228, 14%, 36%)';
    })
    button.forEach( btn => {
        btn.style.color = 'hsl(218, 17%, 47%)';
        btn.style.backgroundColor = 'aliceblue';
        btn.style.borderColor = 'aliceblue';
    })
    del.style.backgroundColor = 'hsl(218, 69%, 81%)'
    del.style.borderColor = 'hsl(218, 69%, 81%)';
    del.style.color = 'aliceblue';
    reset.style.backgroundColor = 'hsl(218, 69%, 81%)'
    reset.style.borderColor = 'hsl(218, 69%, 81%)'
    reset.style.color = 'aliceblue'
    
    equal.style.backgroundColor = 'red'
    equal.style.backgroundColor = 'red'
    equal.style.borderColor = 'red'
    equal.style.color = 'aliceblue'
    
})



theme2.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.add('active')
    btn3.classList.remove('active')

    // ##### STYLE #######
    container.style.backgroundColor = 'aliceblue';
    theme.style.backgroundColor = 'aliceblue';
    theme.style.color = 'black';
    btns.style.backgroundColor = 'rgb(202, 194, 194)'
    // #####
    result.style.backgroundColor = 'rgb(243, 240, 240)';
    result.style.color = 'black';
    // #####
    buttons.forEach( button => {
        button.style.backgroundColor = 'rgb(218, 216, 216)';
    })
    button.forEach( btn => {
        btn.style.color = 'rgb(49, 60, 92)';
        btn.style.backgroundColor = 'beige';
        btn.style.borderColor = 'beige';
    })

    del.style.backgroundColor = 'rgb(127, 255, 234)'
    del.style.borderColor = 'rgb(127, 255, 234)'
    reset.style.backgroundColor = 'rgb(127, 255, 234)';
    reset.style.borderColor = 'rgb(127, 255, 234)';

    equal.style.backgroundColor = 'orangered'
    equal.style.borderColor = 'orangered'
    
    

})

theme3.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
     // ##### STYLE #######
     container.style.backgroundColor = 'rgb(85, 3, 85)';
     theme.style.backgroundColor = 'rgb(46, 1, 46)';
     theme.style.color = 'yellow';
     btns.style.backgroundColor = 'rgb(134, 2, 134)'
     // #####
     result.style.backgroundColor = 'rgb(46, 1, 46)';
     result.style.color = 'yellow';
     // #####

     buttons.forEach( button => {
        button.style.backgroundColor = 'rgb(46, 1, 46)';
    })
    button.forEach( btn => {
        btn.style.color = 'yellow';
        btn.style.backgroundColor = 'rgb(134, 3, 134)';
        btn.style.borderColor = 'rgb(134, 3, 134)';
    })

     del.style.backgroundColor = 'rgb(192, 34, 192)'
    del.style.borderColor = 'rgb(192, 34, 192)'
    reset.style.backgroundColor = 'rgb(192, 34, 192)';
    reset.style.borderColor = 'rgb(192, 34, 192)';

    equal.style.backgroundColor = 'rgb(74, 248, 190)'
    equal.style.borderColor = 'rgb(74, 248, 190)'
    equal.style.color = 'black'
    
})
// ###################################################


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {

            case 'RESET':
                result.innerText = '';
                break;
            case 'DEL':
                if(result.innerText) {
                    result.innerText = result.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                }catch {
                    result.innerText = 'Error!'
                }
                break;

            default:
               result.innerText += e.target.innerText;
        }
    })
})