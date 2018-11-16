import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Example } from './Example';

import './Example.stories.css';

/*!
 * 'Components' - list title in storybook
 */

const stories = storiesOf('Components', module);

/*!
 * 'Example' - Components`s list item
 * inline: true - flag for uploading documentation
 */

stories.add(
  'Example',
  withInfo({ inline: true })(() => (
    <div className="container">
      <div className="firstCellContainer">
        <Example
          value="X"
          position={{ x: 0, y: 0 }}
          onClick={action('onClick')}
        />
      </div>
      <div className="cellContainer">
        <Example
          value=" "
          position={{ x: 0, y: 1 }}
          onClick={action('onClick')}
        />
      </div>
    </div>
  )),
);
