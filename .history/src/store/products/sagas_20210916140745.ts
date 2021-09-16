import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../action-types";
import { fetchProductsFailure, fetchProductsSuccess } from './actions'
import { IProducts } from './types'

function* fetchProductsSaga() {
    try {
        const response = yield call();
        yield put(
            ({
                todos: response.data,
            })
        );
    } catch (e) {
        yield put(
            fetchTodoFailure({
                error: e.message,
            })
        );
    }
}

function* todoSaga() {
    yield all([takeLatest(ActionTypes.FETCH_PRODUCTS_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;