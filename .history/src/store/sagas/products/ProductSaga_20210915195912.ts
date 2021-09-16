import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* fetchTodoSaga() {
    try {
        const response = yield call();
        yield put(
            fetchTodoSuccess({
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
    yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;