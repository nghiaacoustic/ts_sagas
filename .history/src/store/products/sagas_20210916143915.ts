import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../action-types";
import { fetchProductsFailure, fetchProductsSuccess } from './actions'
import { IProducts } from './types'

const getProducts = () =>
    axios.get<IProducts[]>("https://fakestoreapi.com/products");

function* fetchProductsSaga(): any {
    try {
        const response = yield call(getProducts);
        yield put(
            fetchProductsSuccess({
                products: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchProductsFailure({
                error: e.message,
            })
        );
    }
}

function* productsSaga() {
    yield all([takeLatest(ActionTypes.FETCH_PRODUCTS_REQUEST, fetchProductsSaga)]);
}

export default productsSaga;