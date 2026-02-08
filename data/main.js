import {addDay } from "./days.js";
import {render } from "./render.js";

export const selectors = {
    iconMenu : document.querySelector(".menu"),
    h1 : document.querySelector(".h1"),
    progressPerc : document.querySelector(".progress__percent"),
    covBar : document.querySelector(".progress__cover-bar"),
    days : document.querySelector(".days"),
    formHabbit : document.querySelector(".habbit__form"),
}

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