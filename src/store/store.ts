import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tags: TagsState;
  tweets: TweetsState;
  tweet: TweetState;
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
