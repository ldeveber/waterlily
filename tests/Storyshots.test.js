import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
// import 'jest-styled-components';
// import { styleSheetSerializer } from 'jest-styled-components';
// import { addSerializer } from 'jest-specific-snapshot';

// addSerializer(styleSheetSerializer);

jest.mock('react-dom', () => ({
  createPortal: node => node,
}));

initStoryshots({
  configPath: path.resolve(__dirname, '../.storybook'),
  framework: 'react',
  renderer: mount,
  snapshotSerializers: [ createSerializer() ],
  test: multiSnapshotWithOptions(),
});
