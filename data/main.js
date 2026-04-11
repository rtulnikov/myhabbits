import {addDay } from "./days.js";
import {render } from "./render.js";
import {setIcon } from "./popup.js";

export const selectors = {
    iconMenu : document.querySelector(".menu"),
    h1 : document.querySelector(".h1"),
    progressPerc : document.querySelector(".progress__percent"),
    covBar : document.querySelector(".progress__cover-bar"),
    days : document.querySelector(".days"),
    formHabbit : document.querySelector(".habbit__form"),
    cover: document.querySelector(".cover"),
    close: document.querySelector(".popup__close"),
    icons: document.querySelectorAll(".icon"),
    select: document.querySelector(".icon-select")
}

const btnAdd = document.querySelector(".add")
btnAdd.addEventListener("click", () => {
    console.log('всплывает окно')
    selectors.cover.classList.remove("cover_hidden")
})
selectors.close.addEventListener("click", () => {
    console.log('закрывается окно')
    selectors.cover.classList.add("cover_hidden")
})
selectors.select.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        setIcon(btn)
    })
})



export const state = {
    activeHabbitId : null,
    habArr : data(),
}

selectors.formHabbit.addEventListener("submit", addDay);

export function validForm(form){
    const inpts = form.querySelectorAll("input")
    let valid = true;

    inpts.forEach(input => {
            if (input.value == "") {
        input.classList.add("error");
        valid = false
    }

    input.addEventListener("input", () => {
        input.classList.remove("error");
        });
    });
    return valid ? true : false
}

function data(){
    const hab = localStorage.getItem("habbit")
    const habar = JSON.parse(hab);
    if(Array.isArray(habar)) return habar
}

render(state.habArr[0].id)