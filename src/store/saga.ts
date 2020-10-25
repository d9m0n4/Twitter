import { all } from 'redux-saga/effects';
import { TagsSaga } from './ducks/tags/sagas';
import { TweetSaga } from './ducks/tweet/sagas';
import { TweetsSaga } from './ducks/tweets/sagas';

export default function* rootSaga() {
  yield all([TagsSaga(), TweetsSaga(), TweetSaga()]);
}
