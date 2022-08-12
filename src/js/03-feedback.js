import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormInput);



let formData = {};

function onFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

updateDataFromLocalStorage()

function onFormInput(evt) {
    evt.preventDefault();

    if (message.value === '' || email.value === '') {
        alert (`Заполните все поля`);
    } else {
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
    }
}
function updateDataFromLocalStorage() {

    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (data) {
         message.value = data.message;
         email.value = data.email;
    }
};





