import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUserList() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.get('api/shelf/count', config);

        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_USER_LIST', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* userListSaga() {
    yield takeEvery('FETCH_USER_LIST', fetchUserList);
}

export default userListSaga;