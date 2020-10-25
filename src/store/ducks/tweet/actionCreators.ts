import { Action } from 'redux';
import { LoadingState, TweetState } from './contracts/state';

export enum TweetActionsType {
  SET_DATA = 'tweet/SET_DATA',
  FETCH_DATA = 'tweet/FETCH_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_DATA;
  payload: TweetState['data'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_DATA;
  payload: string;
}

export interface SetLoadingTweetStateInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_DATA,
  payload,
});

export const setTweetLoadingState = (payload: LoadingState): SetLoadingTweetStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_DATA,
  payload,
});

export type TweetAction =
  | SetTweetDataActionInterface
  | SetLoadingTweetStateInterface
  | FetchTweetActionInterface;
