import React from 'react';
import Drinks from '../../pages/Drinks';
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
  title: 'pages/Drinks',
  component: Drinks,
  decorators: [ withReduxDecorator ],
};

export const drinks = () => <Drinks />;
