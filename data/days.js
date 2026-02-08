import { render } from "./render.js";
import { state,  validForm, } from "./main.js";

export function addDay(e) {
    e.preventDefault();
    const input = e.target.comment;

    if (validForm(e.target)) {
        const newAr = state.habArr.map((obj) => {
            if (state.activeHabbitId == obj.id) {
                return {
                    ...obj,
                    days: obj.days.concat([{ comment: input.value }]),
                };
            }
            return obj;
        });
        state.habArr = newAr
        render(state.activeHabbitId);
        input.value = "";

    }
}

export function deleteDay(i) {
    console.log(i);

    let arr = state.habArr.map((el) => {
        if (state.activeHabbitId == el.id) {
            return {
                ...el,
                days: el.days.filter((_, index) => i != index),
            };
        }
        return el;
    });
    
    state.habArr = arr
    render(state.activeHabbitId);

    
}
