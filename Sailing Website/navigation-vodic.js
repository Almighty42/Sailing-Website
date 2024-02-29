
window.addEventListener('load', function () {

    const navigationLink1 = document.getElementById("navigation-link-1")
    const navigationLink2 = document.getElementById("navigation-link-2")
    const navigationLink3 = document.getElementById("navigation-link-3")
    const navigationLink4 = document.getElementById("navigation-link-4")
    const navigationLink5 = document.getElementById("navigation-link-5")

    const headerLink1 = document.getElementById("header-link-1")
    const headerLink2 = document.getElementById("header-link-2")
    const headerLink3 = document.getElementById("header-link-3")
    const headerLink4 = document.getElementById("header-link-4")
    const headerLink5 = document.getElementById("header-link-5")

    const headerLinkHam1 = document.getElementById("header-link-hum-1")
    const headerLinkHam2 = document.getElementById("header-link-hum-2")
    const headerLinkHam3 = document.getElementById("header-link-hum-3")
    const headerLinkHam4 = document.getElementById("header-link-hum-4")
    const headerLinkHam5 = document.getElementById("header-link-hum-5")

    const headerLinkFooter1 = document.getElementById("header-link-footer-1")
    const headerLinkFooter2 = document.getElementById("header-link-footer-2")
    const headerLinkFooter3 = document.getElementById("header-link-footer-3")
    const headerLinkFooter4 = document.getElementById("header-link-footer-4")
    const headerLinkFooter5 = document.getElementById("header-link-footer-5")

    const blogPage1 = document.getElementById("blog-1")
    const blogPage2 = document.getElementById("blog-2")
    const blogPage3 = document.getElementById("blog-3")
    const blogPage4 = document.getElementById("blog-4")
    const blogPage5 = document.getElementById("blog-5")

    const burgerButton = document.getElementById('burgerButton');
    const menu = document.getElementById('menu');
    const hr1 = document.getElementById('hr1')
    const hr2 = document.getElementById('hr2')
    const hr3 = document.getElementById('hr3')

    const vodicMenu = document.getElementById("vodic-menu")
    const vodicArrow = document.getElementById("vodic-arrow")
    const pustolovineMenu = document.getElementById("pustolovine-menu")
    const pustolovineArrow = document.getElementById("pustolovine-arrow")

    const clickHandler = (link) => {
        if (link == 'link-1') {
            navigationLink1.classList.add("section-content__navigation__item__selected")
            navigationLink2.classList.remove("section-content__navigation__item__selected")
            navigationLink3.classList.remove("section-content__navigation__item__selected")
            navigationLink4.classList.remove("section-content__navigation__item__selected")
            navigationLink5.classList.remove("section-content__navigation__item__selected")
            
            blogPage1.classList.add("section-content__blog__show")
            blogPage2.classList.remove("section-content__blog__show")
            blogPage3.classList.remove("section-content__blog__show")
            blogPage4.classList.remove("section-content__blog__show")
            blogPage5.classList.remove("section-content__blog__show")

        } else if (link == 'link-2') {
            navigationLink1.classList.remove("section-content__navigation__item__selected")
            navigationLink2.classList.add("section-content__navigation__item__selected")
            navigationLink3.classList.remove("section-content__navigation__item__selected")
            navigationLink4.classList.remove("section-content__navigation__item__selected")
            navigationLink5.classList.remove("section-content__navigation__item__selected")

            blogPage1.classList.remove("section-content__blog__show")
            blogPage2.classList.add("section-content__blog__show")
            blogPage3.classList.remove("section-content__blog__show")
            blogPage4.classList.remove("section-content__blog__show")
            blogPage5.classList.remove("section-content__blog__show")

        } else if (link == 'link-3') {
            navigationLink1.classList.remove("section-content__navigation__item__selected")
            navigationLink2.classList.remove("section-content__navigation__item__selected")
            navigationLink3.classList.add("section-content__navigation__item__selected")
            navigationLink4.classList.remove("section-content__navigation__item__selected")
            navigationLink5.classList.remove("section-content__navigation__item__selected")

            blogPage1.classList.remove("section-content__blog__show")
            blogPage2.classList.remove("section-content__blog__show")
            blogPage3.classList.add("section-content__blog__show")
            blogPage4.classList.remove("section-content__blog__show")
            blogPage5.classList.remove("section-content__blog__show")

        } else if (link == 'link-4') {
            navigationLink1.classList.remove("section-content__navigation__item__selected")
            navigationLink2.classList.remove("section-content__navigation__item__selected")
            navigationLink3.classList.remove("section-content__navigation__item__selected")
            navigationLink4.classList.add("section-content__navigation__item__selected")
            navigationLink5.classList.remove("section-content__navigation__item__selected")

            blogPage1.classList.remove("section-content__blog__show")
            blogPage2.classList.remove("section-content__blog__show")
            blogPage3.classList.remove("section-content__blog__show")
            blogPage4.classList.add("section-content__blog__show")
            blogPage5.classList.remove("section-content__blog__show")

        } else if (link == 'link-5') {
            navigationLink1.classList.remove("section-content__navigation__item__selected")
            navigationLink2.classList.remove("section-content__navigation__item__selected")
            navigationLink3.classList.remove("section-content__navigation__item__selected")
            navigationLink4.classList.remove("section-content__navigation__item__selected")
            navigationLink5.classList.add("section-content__navigation__item__selected")

            blogPage1.classList.remove("section-content__blog__show")
            blogPage2.classList.remove("section-content__blog__show")
            blogPage3.classList.remove("section-content__blog__show")
            blogPage4.classList.remove("section-content__blog__show")
            blogPage5.classList.add("section-content__blog__show")

        }
    }

    const handleHeader = (type) => {
        if (type == 'vodic') {
            if (pustolovineMenu.classList.contains("header__pustolovine-menu__shown")) {
                pustolovineMenu.classList.toggle("header__pustolovine-menu__shown")
                pustolovineArrow.classList.toggle("header__item__arrow__show")
            }
            vodicMenu.classList.toggle("header__vodic-menu__shown")
            vodicArrow.classList.toggle("header__item__arrow__show")
        } else if (type == 'pustolovine') {
            if (vodicMenu.classList.contains("header__vodic-menu__shown")) {
                vodicMenu.classList.toggle("header__vodic-menu__shown")
                vodicArrow.classList.toggle("header__item__arrow__show")
            }
            pustolovineMenu.classList.toggle("header__pustolovine-menu__shown")
            pustolovineArrow.classList.toggle("header__item__arrow__show")
        }
    }

    const burgerHandler = (arg) => {
        burgerButton.classList.toggle('active')
        menu.classList.toggle('active');
        hr1.classList.toggle('active')
        hr2.classList.toggle('active')
        hr3.classList.toggle('active')
    }
    navigationLink1.addEventListener("click", () => { clickHandler('link-1') });
    navigationLink2.addEventListener("click", () => { clickHandler('link-2') });
    navigationLink3.addEventListener("click", () => { clickHandler('link-3') });
    navigationLink4.addEventListener("click", () => { clickHandler('link-4') });
    navigationLink5.addEventListener("click", () => { clickHandler('link-5') });
    headerLink1.addEventListener("click", () => { clickHandler('link-1');handleHeader('vodic') });
    headerLink2.addEventListener("click", () => { clickHandler('link-2');handleHeader('vodic') });
    headerLink3.addEventListener("click", () => { clickHandler('link-3');handleHeader('vodic') });
    headerLink4.addEventListener("click", () => { clickHandler('link-4');handleHeader('vodic') });
    headerLink5.addEventListener("click", () => { clickHandler('link-5');handleHeader('vodic') });
    headerLinkFooter1.addEventListener("click", () => { clickHandler('link-1'); });
    headerLinkFooter2.addEventListener("click", () => { clickHandler('link-2'); });
    headerLinkFooter3.addEventListener("click", () => { clickHandler('link-3'); });
    headerLinkFooter4.addEventListener("click", () => { clickHandler('link-4'); });
    headerLinkFooter5.addEventListener("click", () => { clickHandler('link-5'); });
    headerLinkHam1.addEventListener("click", () => { clickHandler('link-1'); burgerHandler() });
    headerLinkHam2.addEventListener("click", () => { clickHandler('link-2'); burgerHandler() });
    headerLinkHam3.addEventListener("click", () => { clickHandler('link-3'); burgerHandler() });
    headerLinkHam4.addEventListener("click", () => { clickHandler('link-4'); burgerHandler() });
    headerLinkHam5.addEventListener("click", () => { clickHandler('link-5'); burgerHandler() });


    if (window.location.hash) {
        const fragment = window.location.hash.substring(1); // Remove the # symbol
        // Trigger click event on the corresponding navigation link based on the fragment
        if (fragment === 'link-1') {
            clickHandler('link-1');
        } else if (fragment === 'link-2') {
            clickHandler('link-2')
        } else if (fragment === 'link-3') {
            clickHandler('link-3');
        } else if (fragment === 'link-4') {
            clickHandler('link-4');
        } else if (fragment === 'link-5') {
            clickHandler('link-5');
        }
    }

});