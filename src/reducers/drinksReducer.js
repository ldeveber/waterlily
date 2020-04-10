import produce from 'immer';
import {
  FETCH_DRINKS_BEGIN,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAILURE,
} from '../actions/drinksAction';

const initialState = {
  drinks: {},
  loading: false,
  error: null,
};

export default function drinksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_DRINKS_BEGIN:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = null;
      });

    case FETCH_DRINKS_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.drinks = action.payload.drinks;
      });

    case FETCH_DRINKS_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = action.payload.error;
        draft.drinks = {};
      });

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
