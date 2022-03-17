const myform = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput.value);

    if (nameInput.value=== '' || emailInput.value ==='') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode());
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    
        
    }
}