const habArr = JSON.parse(localStorage.getItem("habbit"))
const iconMenu = document.querySelector(".menu")
const h1 = document.querySelector(".h1");
const progressPerc = document.querySelector(".progress__percent")
const covBar = document.querySelector(".progress__cover-bar")
const days = document.querySelector(".days")

// console.log(habArr)
function menu(id) {
    for (const elem of habArr) {

        const haveBtn = document.querySelector(`[btn-id="${elem.id}"]`)

        if (!haveBtn) {
            const button = document.createElement("button");
            button.setAttribute("btn-id", elem.id);

            if (id == elem.id) {
                button.classList.add("menu__item-active")
            }

            button.addEventListener("click", () => {
                menu(elem.id)
                header(elem.id)
                renderBody(elem)
            })

            button.classList.add("menu__item")
            button.innerHTML = `<img src= images/${elem.icon}.svg />`
            iconMenu.append(button)

        } else if (id == elem.id) {
            haveBtn.classList.add("menu__item-active");
        } else {
            haveBtn.classList.remove("menu__item-active");
        }

    }
}
menu(habArr[0].id)

function header(id) {
    const obj = habArr.find((elem) => elem.id == id);
    let percen = Math.round(obj.days.length / obj.target * 100);

    if (percen > 100) percen = 100;

    h1.textContent = obj.name;
    progressPerc.textContent = percen + "%";
    covBar.style.width = percen + "%"

}
header(habArr[0].id)

function renderBody(obj) {
    days.innerHTML = '';
    for (let number = 0; number < obj.days.length; number++) {
        const habDiv = document.createElement("div");
        console.log(obj.days[number])
        
        habDiv.classList.add("habbit")
        habDiv.innerHTML = `<div class="habbit__day">день ${number + 1}</div>
                            <div class="habbit__text">${obj.days[number].comment}</div>
                            <button class="habbit__delete">
                                <img src="images/delete.svg" alt="удаление" />
                            </button>`;
        days.append(habDiv);

    }

}
renderBody(habArr[0])