import { ActionTypes } from "../action-types";


interface Loading {
    type: ActionTypes.FETCH_PRODUCTS_REQUEST
}
interface Success {
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: string[]
}
interface Error {
    type: ActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: string
}

export type Action = Loading | Success | Error