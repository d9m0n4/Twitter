import { Tweet } from '../../tweets/contracts/state';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  loadingState = 'loadingState',
}

export interface TweetState {
  data?: Tweet;
  loadingState: LoadingState;
}
