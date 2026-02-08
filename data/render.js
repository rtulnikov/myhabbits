import { deleteDay} from "./days.js";
import { state, selectors } from "./main.js";

// console.log(habArr)
function renderMenu(id) {
    for (const elem of state.habArr) {
        const haveBtn = document.querySelector(`[btn-id="${elem.id}"]`);

        if (!haveBtn) {
            const button = document.createElement("button");
            button.setAttribute("btn-id", elem.id);

            if (id == elem.id) {
                button.classList.add("menu__item-active");
            }

            button.addEventListener("click", () => {
                render(elem.id)
            });

            button.classList.add("menu__item");
            button.innerHTML = `<img src= images/${elem.icon}.svg />`;
            selectors.iconMenu.append(button);
        } else if (id == elem.id) {
            haveBtn.classList.add("menu__item-active");
        } else {
            haveBtn.classList.remove("menu__item-active");
        }
    }
}


function renderHeader(obj) {
    // const obj = state.habArr.find((el) => el.id === id);
    console.log(obj)
    let percen = Math.round((obj.days.length / obj.target) * 100);

    if (percen > 100) percen = 100;

    selectors.h1.textContent = obj.name;
    selectors.progressPerc.textContent = percen + "%";
    selectors.covBar.style.width = percen + "%";
}


function renderBody(obj) {

    
        selectors.days.innerHTML = '';
    
    // const habbit__comment =

    for (let i = 0; i < obj.days.length; i++) {
        const habDiv = document.createElement("div");
        habDiv.classList.add("habbit");
        habDiv.innerHTML = `<div class="habbit__day">День ${i + 1}</div>
                                <div class="habbit__comment">${
                                    obj.days[i].comment
                                }</div>`;

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("habbit__delete");
        btnDelete.innerHTML = `<img src= ./images/delete.svg />`
        btnDelete.addEventListener("click", ()=>{
            deleteDay(i)
        })
        habDiv.append(btnDelete);
        selectors.days.append(habDiv)
    }
}


export function render(id) {
    state.activeHabbitId = id
    console.log(id)
    renderMenu(id);
    const obj = state.habArr.find((el) => el.id === id);
    renderHeader(obj);
    renderBody(obj);
}



