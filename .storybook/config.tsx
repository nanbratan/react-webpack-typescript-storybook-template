import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';

addDecorator(story => (
  <React.Fragment>
    {story()}
  </React.Fragment>
));

/*!
 * automatically import all files ending in *.stories.tsx
 */

const req = require.context('../src/components', true, /.stories.tsx$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
