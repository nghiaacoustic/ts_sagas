import { ActionTypes } from "../action-types";

export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: object
}

export interface ProductsState {
    loading: boolean;
    data: IProducts[];
    error: string | null;
}

export interface FetchProductsSuccessPayload {
    Products: IProducts[];
}

export interface FetchProductsFailurePayload {
    error: string;
}

export type FetchProductsSuccess = {
    type: typeof ActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: FetchProductsSuccessPayload;
};

export type FetchProductsFailure = {
    type: typeof ActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: FetchProductsFailurePayload;
};
