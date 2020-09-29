import { call, put, takeEvery } from 'redux-saga/effects';
import { setLoadingState, setTweets, TweetsActionsType } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    console.log(items);

    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
