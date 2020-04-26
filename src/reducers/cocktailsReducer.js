import produce from 'immer';
import {
  FETCH_COCKTAILS_BEGIN,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_FAILURE,
} from '../actions/cocktailsAction';

const initialState = {
  cocktails: {},
  loading: false,
  error: null,
};

export default function cocktailsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COCKTAILS_BEGIN:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = null;
      });

    case FETCH_COCKTAILS_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.cocktails = action.payload.cocktails;
      });

    case FETCH_COCKTAILS_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = action.payload.error;
        draft.cocktails = {};
      });

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
