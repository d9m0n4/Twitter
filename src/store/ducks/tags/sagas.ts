import { call, put, takeEvery } from 'redux-saga/effects';
import { LoadingState } from './contracts/state';
import { TagsApi } from '../../../services/api/tagsAPI';
import { setLoadingState, setTags, TagsActionsType } from './actionCreators';

export function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags);
    console.log(items);

    yield put(setTags(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* TagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTagsRequest);
}
