let habArr = JSON.parse(localStorage.getItem("habbit"));
const iconMenu = document.querySelector(".menu");
const h1 = document.querySelector(".h1");
const progressPerc = document.querySelector(".progress__percent");
const covBar = document.querySelector(".progress__cover-bar");
const days = document.querySelector(".days");
const formHabbit = document.querySelector(".habbit__form");

formHabbit.addEventListener("submit", addDay);

    function perezapis(arr){
        habArr = arr;
    }

// console.log(habArr)
function menu(id) {
    for (const elem of habArr) {
        const haveBtn = document.querySelector(`[btn-id="${elem.id}"]`);

        if (!haveBtn) {
            const button = document.createElement("button");
            button.setAttribute("btn-id", elem.id);

            if (id == elem.id) {
                button.classList.add("menu__item-active");
            }

            button.addEventListener("click", () => {
                menu(elem.id);
                header(elem.id);
                renderBody(elem);
            });

            button.classList.add("menu__item");
            button.innerHTML = `<img src= images/${elem.icon}.svg />`;
            iconMenu.append(button);
        } else if (id == elem.id) {
            haveBtn.classList.add("menu__item-active");
        } else {
            haveBtn.classList.remove("menu__item-active");
        }
    }
}
menu(habArr[0].id);

function header(id) {
    const obj = habArr.find((el) => id === el.id);
    let percen = Math.round((obj.days.length / obj.target) * 100);

    if (percen > 100) percen = 100;

    h1.textContent = obj.name;
    progressPerc.textContent = percen + "%";
    covBar.style.width = percen + "%";
}
header(habArr[0].id);

function renderBody(obj) {

    
        days.innerHTML = '';
    
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
        days.append(habDiv)
    }
}
renderBody(habArr[0]);

function render(id) {
    menu(id);
    const obj = habArr.find((el) => el.id === id);
    header(id);
    renderBody(obj);
}

function addDay(e) {
    const aId = document.querySelector(".menu__item-active");
    const activeId = +aId.getAttribute("btn-id");

    e.preventDefault();
    const input = e.target.comment;
    if (input.value == "") {
        input.classList.add("error");
        return;
    }

    input.addEventListener("input", () => {
        input.classList.remove("error");
    });

    const newAr = habArr.map((obj) => {
        if (activeId == obj.id) {
            return {
                ...obj,
                days: obj.days.concat([{ comment: input.value }]),
            };
        }
        return obj;
    });
    perezapis(newAr)
    render(activeId);
    input.value = "";
}

function deleteDay(i) {
    console.log(i)
    const btn = document.querySelector(".menu__item-active");
    const activeId = +btn.getAttribute("btn-id");

    let arr = habArr.map((el) => {
        if (activeId == el.id) {
            return {
                ...el,
                days: el.days.filter((_, index) => i != index),
            };
        }
        return el;
    });

    perezapis(arr)
    render(activeId);

}
