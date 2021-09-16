import { ActionTypes } from "../action-types";

import { ProductActions, ProductsState } from './types';

const initialState: ProductsState = {
    loading: false,
    data: [],
    error: null,
};

export default (state = initialState, action: ProductActions) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.products,
                error: null,
            };
        case ActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};