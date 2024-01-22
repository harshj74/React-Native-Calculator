import { actionType } from "../type"

export const numberAction = (data:any) => {
    return {
        type:actionType.number,
        data:data
    }
}

export const bracketAction = (data:any) => {
    return {
        type:actionType.bracket,
        data:data
    }
}