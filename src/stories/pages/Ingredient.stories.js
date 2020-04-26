import React from 'react';
import Ingredient from '../../pages/Ingredient';
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
  title: 'pages/Ingredient',
  component: Ingredient,
  decorators: [ withReduxDecorator ],
};

export const ingredient = () => <Ingredient />
