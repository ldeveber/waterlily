import { combineReducers } from 'redux';

import drinks from './drinksReducer';
import ingredients from './ingredientsReducer';

export default combineReducers({
  drinks,
  ingredients,
});
