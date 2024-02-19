
window.addEventListener('load', function () {

    const radioBody1 = document.querySelector("#radio-body-1")
    const radioButton1 = document.querySelector("#radio-button-1")
    const radioBody2 = document.querySelector("#radio-body-2")
    const radioButton2 = document.querySelector("#radio-button-2")

    const burgerButton = document.getElementById('burgerButton');
    const menu = document.getElementById('menu');
    const hr1 = document.getElementById('hr1')
    const hr2 = document.getElementById('hr2')
    const hr3 = document.getElementById('hr3')

    const vodicButton = document.getElementById("vodic")
    const vodicMenu = document.getElementById("vodic-menu")
    const vodicArrow = document.getElementById("vodic-arrow")
    const pustolovineButton = document.getElementById("pustolovine")
    const pustolovineMenu = document.getElementById("pustolovine-menu")
    const pustolovineArrow = document.getElementById("pustolovine-arrow")

    const vodicHamburger = document.getElementById('vodic-hamburger')
    const vodicHamburgerMenu = document.getElementById('vodic-hamburger-menu')
    const vodicHamburgerArrow = document.getElementById('vodic-hamburger-arrow')
    const pustolovineHamburger = document.getElementById('pustolovine-hamburger')
    const pustolovineHamburgerMenu = document.getElementById('pustolovine-hamburger-menu')
    const pustolovineHamburgerArrow = document.getElementById('pustolovine-hamburger-arrow')

    burgerButton.addEventListener('click', function () {
        menu.classList.toggle('active');
        this.classList.toggle('active');
        hr1.classList.toggle('active')
        hr2.classList.toggle('active')
        hr3.classList.toggle('active')
    });

    vodicButton.addEventListener("click", () => {
        if (pustolovineMenu.classList.contains("header__pustolovine-menu__shown")) {
            pustolovineMenu.classList.toggle("header__pustolovine-menu__shown")
            pustolovineArrow.classList.toggle("header__item__arrow__show")
        }
        vodicMenu.classList.toggle("header__vodic-menu__shown")
        vodicArrow.classList.toggle("header__item__arrow__show")
    })
    pustolovineButton.addEventListener("click", () => {
        if (vodicMenu.classList.contains("header__vodic-menu__shown")) {
            vodicMenu.classList.toggle("header__vodic-menu__shown")
            vodicArrow.classList.toggle("header__item__arrow__show")
        }
        pustolovineMenu.classList.toggle("header__pustolovine-menu__shown")
        pustolovineArrow.classList.toggle("header__item__arrow__show")
    })


    vodicHamburger.addEventListener("click", () => {
        if (pustolovineHamburgerArrow.classList.contains("header__item__arrow__show")) {
            pustolovineHamburgerMenu.classList.toggle("header__pustolovine-hamburger-menu__show")
            pustolovineHamburgerArrow.classList.toggle("header__item__arrow__show")
        }
        vodicHamburgerMenu.classList.toggle("header__vodic-hamburger-menu__show")
        vodicHamburgerArrow.classList.toggle("header__item__arrow__show")
    })
    pustolovineHamburger.addEventListener("click", () => {
        if (vodicHamburgerArrow.classList.contains("header__item__arrow__show")) {
            vodicHamburgerMenu.classList.toggle("header__vodic-hamburger-menu__show")
            vodicHamburgerArrow.classList.toggle("header__item__arrow__show")
        }
        pustolovineHamburgerMenu.classList.toggle("header__pustolovine-hamburger-menu__show")
        pustolovineHamburgerArrow.classList.toggle("header__item__arrow__show")
    })
});