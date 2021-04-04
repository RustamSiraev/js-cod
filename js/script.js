import calc from "./modules/calc"
import cards from "./modules/cards"
import forms from "./modules/forms"
import modal, {openModal} from "./modules/modal"
import slider from "./modules/slider"
import tabs from "./modules/tabs"
import timer from "./modules/timer"

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000)

    calc()
    cards()
    forms('form', modalTimerId)
    modal('[data-modal]', '.modal', modalTimerId)
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner',
        stepInterval: 6000
    })
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer', '2021-04-12')
})