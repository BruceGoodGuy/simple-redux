import {lang} from './../constants/main';
const initial  = 'Sample';
const text = (state = initial, action) => {
    switch (action.type){
        case lang.action.SET_TEXT: 
            state = action.text; 
            return [...state];
        case lang.action.GET_TEXT:
            return [...state] 
        default: return state;
    }
}

export default text;