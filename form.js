

// single element
console.log(document.getElementById('myform'));
console.log(document.querySelector('h1'));


// multiple element
console.log(document.querySelectorAll('.container'));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello'; 

// btn
const btn = document.querySelector('.btn');

btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    document.querySelector('#myform').style.background = '#ccc';
    document.querySelector('body').classList.add('bgdark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

    
});

    
    // btn.style.background = 'red';

    // console.log(e.target.id);
    // console.log(e);

