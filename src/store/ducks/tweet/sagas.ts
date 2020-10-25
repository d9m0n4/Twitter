import { call, put, takeEvery } from 'redux-saga/effects';
import { LoadingState } from './contracts/state';
import { TweetsApi } from '../../../services/api/tweetsAPI';
import {
  setTweetLoadingState,
  setTweetData,
  TweetActionsType,
  FetchTweetActionInterface,
} from './actionCreators';
import { Tweet } from '../tweets/contracts/state';

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* TweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_DATA, fetchTweetRequest);
}
