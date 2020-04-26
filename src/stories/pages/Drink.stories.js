import React from 'react';
import Drink from '../../pages/Drink';
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
  title: 'pages/Drink',
  component: Drink,
  decorators: [ withReduxDecorator ],
};

export const drink = () => <Drink />;
