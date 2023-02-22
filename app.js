

const container = document.querySelector('.container');
const btns = document.querySelector('.btns')
const equals = document.querySelector('.equals');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');


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
    result.style.backgroundColor = 'hsl(220, 88%, 10%)'
    // #####
    del.style.backgroundColor = 'lightslategray';
    reset.style.backgroundColor = 'lightslategray';
    equals.style.backgroundColor = 'red';
    equals.style.borderColor = 'red';
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
    result.style.backgroundColor = 'rgb(243, 240, 240)'
    // #####
    numerics.style.backgroundColor = 'rgb(202, 194, 194)'
    del.style.backgroundColor = 'skyblue'
    reset.style.backgroundColor = 'skyblue';
    equals.style.backgroundColor = 'orangered';
    equals.style.borderColor = 'orangered';

})

theme3.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
     // ##### STYLE #######
     container.style.backgroundColor = 'rgb(85, 3, 85)';
     theme.style.backgroundColor = 'rgb(85, 3, 85)';
     theme.style.color = 'yellow';
     btns.style.backgroundColor = 'rgb(134, 2, 134)'
     // #####
     result.style.backgroundColor = 'rgb(134, 2, 134)'
     // #####
     numerics.style.backgroundColor = 'rgb(202, 194, 194)'
     del.style.backgroundColor = 'rgb(189, 5, 189)'
     reset.style.backgroundColor = 'rgb(189, 5, 189)';
     equals.style.backgroundColor = 'rgb(74, 248, 190)';
     equals.style.borderColor = 'rgb(74, 248, 190)';
     equals.style.color = 'black';
})
// ###################################################3