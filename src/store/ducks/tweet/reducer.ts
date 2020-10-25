import { Draft, produce } from 'immer';
import { TweetAction, TweetActionsType } from './actionCreators';
import { LoadingState, TweetState } from './contracts/state';

const initialTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const TweetReducer = produce((draft: Draft<TweetState>, action: TweetAction) => {
  switch (action.type) {
    case TweetActionsType.SET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActionsType.FETCH_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetState);
