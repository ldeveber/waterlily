import { combineReducers } from 'redux';

import cocktails from './cocktailsReducer';
import ingredients from './ingredientsReducer';

export default combineReducers({
  cocktails,
  ingredients,
});
