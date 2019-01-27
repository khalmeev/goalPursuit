import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@storybook/react/demo';

storiesOf('Buttons/Simple', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ));

storiesOf('Buttons/Emoji', module)
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
