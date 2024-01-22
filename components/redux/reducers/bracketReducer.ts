import { AnyAction } from "@reduxjs/toolkit";
import { actionType } from "../type";

const initialState = {
    bracket: false
}

const bracketReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionType.bracket:
            return {
                ...state,
                bracket: action.data
            }
        default:
            return state;
    }
}

export default bracketReducer

