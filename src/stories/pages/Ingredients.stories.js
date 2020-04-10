import React from 'react';
import Ingredients from '../../pages/Ingredients';
import { Provider } from 'react-redux';
import store from '../store';
import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';

const withReduxSettings = {
  Provider,
  store,
  state: {},
  actions: [],
};
const withReduxDecorator = withRedux(addons)(withReduxSettings);

export default {
  title: 'pages/Ingredients',
  component: Ingredients,
  decorators: [ withReduxDecorator ],
};

export const ingredients = () => <Ingredients />
