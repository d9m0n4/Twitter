import { Draft, produce } from 'immer';
import { TagsAction, TagsActionsType } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';

const initialTagsState: TagsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const TagsReducer = produce((draft: Draft<TagsState>, action: TagsAction) => {
  switch (action.type) {
    case TagsActionsType.SET_ITEMS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TagsActionsType.FETCH_ITEMS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TagsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTagsState);
