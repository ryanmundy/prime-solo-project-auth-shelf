import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';



function* addItems(action) {
    try{
        yield call(axios.post, '/api/shelf', action.payload )
        yield put({type: 'FETCH_SHELF'})
    }
    catch(error){
        console.log('error in addItems saga', error)
    }
}




function* addItem() {
    yield takeEvery('ADD_ITEM', addItems )
}

export default  addItem;