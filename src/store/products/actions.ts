import { ActionTypes } from "../action-types";

import {
    FetchProductsFailure,
    FetchProductsRequest,
    FetchProductsSuccess,
    FetchProductsFailurePayload,
    FetchProductsSuccessPayload
} from './types'

export const fetchProductsRequest = (): FetchProductsRequest => ({
    type: ActionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (
    payload: FetchProductsSuccessPayload
): FetchProductsSuccess => ({
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload,
});

export const fetchProductsFailure = (
    payload: FetchProductsFailurePayload
): FetchProductsFailure => ({
    type: ActionTypes.FETCH_PRODUCTS_FAILURE,
    payload,
});