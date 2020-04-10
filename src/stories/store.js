import { createStore, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import withReduxEnhancer from 'addon-redux/enhancer';
import { applyMiddleware } from 'redux';

const createEnhancer = () => {
  const enhancers = [];
  enhancers.push(applyMiddleware(thunk));
  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(withReduxEnhancer);
  }
  return compose(...enhancers);
};

const store = createStore(reducers, createEnhancer());

export default store;
