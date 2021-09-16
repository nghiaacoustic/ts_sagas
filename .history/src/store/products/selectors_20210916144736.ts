import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.products.loading;

const getProducts = (state: AppState) => state.products.data;

const getError = (state: AppState) => state.products.error;

export const getProductsSelector = createSelector(getProducts, (products) => products);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);