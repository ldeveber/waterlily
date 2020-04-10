import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
  backgrounds: [
    { name: 'Ceiling Cat', value: '#fff', default: true },
    { name: 'Basement Cat', value: '#000', default: true },
  ],
});

addDecorator(withA11y);
