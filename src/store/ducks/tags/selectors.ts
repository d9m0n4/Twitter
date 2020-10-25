import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTags(state).loadingState;
export const selectIsLoadingTags = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsLoadedTags = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (Tags) => Tags.items);
