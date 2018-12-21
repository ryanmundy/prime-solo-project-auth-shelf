import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteShelfItem(action) {
    // console.log('in deleteShelfItem:', this.props.id);

    // console.log('in deleteShelfItem: id', id);

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }, // ensures that app is looking for JSON
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will delete shelf item
        // from the server session (req.user)
        const response = yield axios.delete(`api/delete/${action.payload}`, config);
        // const response = yield axios.delete(`api/delete/${id}`);

        //reset the client side shelf
        yield put({ type: 'FETCH_SHELF', payload: response.data });
    } catch (error) {
        console.log('shelf delete item failed, error:', error);
    }
}

function* deleteSaga() {
    yield takeEvery('DELETE_SHELF_ITEM', deleteShelfItem)
}

export default deleteSaga;