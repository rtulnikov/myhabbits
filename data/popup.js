import {selectors } from "./main.js";

export function setIcon(btn){
    let icon = btn.dataset.icon
    selectors.select.querySelectorAll("button").forEach(btn =>{
        btn.classList.toggle("icon_active", icon == btn.dataset.icon)
    })
    
}

// function setIcon(btn){
//     let actBtn = document.querySelector(".icon_active")
//     actBtn.classList.remove("icon_active")
//     btn.classList.add("icon_active")
// }