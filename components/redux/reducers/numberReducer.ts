import { AnyAction } from "@reduxjs/toolkit";
import { actionType } from "../type";

const initialState = {
    number: '0'
}

const numberReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionType.number:
            return {
                ...state,
                number: action.data
            }

        default:
            return state;
    }
}

export default numberReducer

