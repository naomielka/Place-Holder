'use strict'


var user = {
    bgc: '',
    txtcolor: '',
    email: '',
    age: ''
}

function onSave(ev) {
    ev.preventDefault();
    const bgColor = document.querySelector('[name=bg-color]').value;
    user.bgc = bgColor
    const txtColor = document.querySelector('[name=txt-color]').value;
    user.txtcolor = txtColor
    renderStyle();
    saveToStorage('user', user);
}

function renderStyle() {
    const user = loadFromStorage('user');
    document.body.style.backgroundColor = user.bgc;
    document.body.style.color = user.txtcolor;
}

function renderHoroscope() {
    const email = document.querySelector('[name=email]').value;
    user.email = email
    const age = document.querySelector('[name=age]').value;
    user.age = age
    saveToStorage('horoscope', true);
    saveToStorage('user', user);

}

function renderAge(newVal) {
    document.getElementById("age").innerHTML = newVal;
}