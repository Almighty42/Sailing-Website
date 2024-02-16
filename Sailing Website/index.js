
window.addEventListener('load', function () {

    const radioBody1 = document.querySelector("#radio-body-1")
    const radioButton1 = document.querySelector("#radio-button-1")
    const radioBody2 = document.querySelector("#radio-body-2")
    const radioButton2 = document.querySelector("#radio-button-2")

    const burgerButton = document.getElementById('burgerButton');
    const menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function () {
        menu.classList.toggle('active');
        this.classList.toggle('active');
    });

    //radioBody1.classList.add("section-form__radio-body__selected")
    //radioButton1.classList.add("section-form__radio__selected")
    //radioButton1.checked = true

    radioBody1.addEventListener("click", () => {
        if (radioButton1.checked && !radioButton2.checked) {
            radioBody1.classList.remove("section-form__radio-body__selected")
            radioButton1.classList.remove("section-form__radio__selected")
            radioButton1.checked = false
        } else if (!radioButton1.checked && !radioButton2.checked) {
            radioBody1.classList.add("section-form__radio-body__selected")
            radioButton1.classList.add("section-form__radio__selected")
            radioButton1.checked = true
        } else if (!radioButton1.checked && radioButton2.checked) {
            radioBody1.classList.add("section-form__radio-body__selected")
            radioButton1.classList.add("section-form__radio__selected")
            radioButton1.checked = true
            radioBody2.classList.remove("section-form__radio-body__selected")
            radioButton2.classList.remove("section-form__radio__selected")
            radioButton2.checked = false
        }
    })
    radioBody2.addEventListener("click", () => {
        if (radioButton2.checked && !radioButton1.checked) {
            radioBody2.classList.remove("section-form__radio-body__selected")
            radioButton2.classList.remove("section-form__radio__selected")
            radioButton2.checked = false
        } else if (!radioButton2.checked && !radioButton1.checked) {
            radioBody2.classList.add("section-form__radio-body__selected")
            radioButton2.classList.add("section-form__radio__selected")
            radioButton2.checked = true
        } else if (!radioButton2.checked && radioButton1.checked) {
            radioBody2.classList.add("section-form__radio-body__selected")
            radioButton2.classList.add("section-form__radio__selected")
            radioButton2.checked = true
            radioBody1.classList.remove("section-form__radio-body__selected")
            radioButton1.classList.remove("section-form__radio__selected")
            radioButton1.checked = false
        }
    })
});