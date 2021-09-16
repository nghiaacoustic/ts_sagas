import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.products.loading;

const getTodos = (state: AppState) => state.products.data;

const getError = (state: AppState) => state.products.error;