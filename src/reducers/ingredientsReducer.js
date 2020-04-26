import produce from 'immer';
import {
  FETCH_INGREDIENTS_BEGIN,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
} from '../actions/ingredientsAction';

const initialState = {
  ingredients: {},
  tree: {},
  loading: false,
  error: null,
};

export default function ingredientsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_INGREDIENTS_BEGIN:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = null;
      });

    case FETCH_INGREDIENTS_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.ingredients = action.payload.ingredients;
        draft.tree = action.payload.tree;
      });

    case FETCH_INGREDIENTS_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = action.payload.error;
        draft.ingredients = {};
      });

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
