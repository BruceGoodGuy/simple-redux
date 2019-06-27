import {lang} from './../constants/main';
export const setText = (text) => {
    return {
        type: lang.action.SET_TEXT,
        text
    }
}

export const getText = () => {
    return {
        type: lang.action.GET_TEXT,
    }
}