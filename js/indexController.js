'use strict'

function onInit() {
    renderStyle();
    renderHoroscope();
}

function renderStyle() {
    const user = loadFromStorage('user');
    document.body.style.backgroundColor = user.bgc;
    document.body.style.color = user.txtcolor;
}

function renderHoroscope() {
    let isHoroscopeOn = loadFromStorage('horoscope')
    if (isHoroscopeOn === true) renderHoroscopeSection();
}

function renderHoroscopeSection() {
    let horoscope = getHoroscope()
    document.querySelector('.horoscope').innerText = horoscope;
}