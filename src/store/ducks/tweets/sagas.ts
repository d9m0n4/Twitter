import { call, put, takeEvery } from 'redux-saga/effects';
import { LoadingState } from './contracts/state';
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { setLoadingState, setTweets, TweetsActionsType } from './actionCreators';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    console.log(items);

    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* TweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
