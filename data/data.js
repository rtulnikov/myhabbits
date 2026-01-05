const habArr = JSON.parse(localStorage.getItem("habbit"))
const iconMenu = document.querySelector(".menu")

console.log(habArr)
function menu(id) {
    for (const elem of habArr) {

        const haveBtn = document.querySelector(`[data-btn-id="${elem.id}"]`)
        console.log(haveBtn)
        if (!haveBtn) {
            const button = document.createElement("button");
            button.setAttribute("data-btn-id", elem.id);

            if (id == elem.id) {
                button.classList.add("menu__item-active")
            }

            button.addEventListener("click", () => {
                menu(elem.id)
            })

            button.classList.add("menu__item")
            button.innerHTML = `<img src= images/${elem.icon}.svg />`
            iconMenu.append(button)

        }else if(id == elem.id){
            haveBtn.classList.add("menu__item-active");
        }else{
            haveBtn.classList.remove("menu__item-active");
        }

    }
}
menu(habArr[0].id)