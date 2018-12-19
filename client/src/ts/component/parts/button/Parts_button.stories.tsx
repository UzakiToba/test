import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { MemoryRouter } from 'react-router';

import Glay from './Gray/';

const stories = storiesOf('Parts', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y);

const styles = {
  border: '1px solid #ddd',
  padding: '10px'
};

const LayoutDecorator = (story: any) => {
  const element: any = (
    <div style={styles}>
      <MemoryRouter>{story()}</MemoryRouter>
    </div>
  );
  return element;
};

const h2 = {
  marginTop: '10px'
};

stories.addDecorator(LayoutDecorator).add(
  'Button',
  withInfo(`
  ## test
  hoge  
  huga
`)(() => {
    return (
      <div>
        <h2 style={{ textAlign: 'center', ...h2 }}>Glay</h2>
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>Button</p>
        <Glay.Button type="button" text="hogehoge" />
      </div>
    );
  })
);
