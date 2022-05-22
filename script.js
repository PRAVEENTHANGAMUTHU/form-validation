'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');

let userArray = [username, email, password, confirmpassword];



const showError = function(input, Message){
    let formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = Message;
}

const showSuccess = function(input){
    let formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

let checkrequired = function (userArray) {
  userArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.name} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checklength = function(input, min, max){
    if (input.value.trim().length > max){
        showError(input, `${input.name} must be atleast ${min} characters`);
    }else if (input.value.trim().length < min){
        showError(input, `${input.name} must be atleast ${max} characters`);
    }else{
        showSuccess(input);
    }
}

const checkPasswordMatch = function(password1, password2){
    if (password1.value.trim() !== '' && password2.value.trim() !== ' '){
        if (password1.value.trim() !== password2.value.trim()){
            showError(password2, 'Password not matched');
        }else{
            showSuccess(password1);
            showSuccess(password2);
        }
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    checkrequired(userArray);
    checklength(username, 5, 12);
    checklength(password, 5, 12);
    checklength(confirmpassword, 5, 12);
    checkPasswordMatch(password, confirmpassword);
})