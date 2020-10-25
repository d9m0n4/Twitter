import { combineReducers } from 'redux';
import { TagsReducer } from './ducks/tags/reducer';
import { TweetReducer } from './ducks/tweet/reducer';
import { TweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: TweetsReducer,
  tags: TagsReducer,
  tweet: TweetReducer,
});
