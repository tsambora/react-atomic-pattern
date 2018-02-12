import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../lib/elements/Button';
import Label from '../lib/elements/Label';
import TextInput from '../lib/elements/TextInput';

storiesOf('Atoms', module)
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
    >
      Hello Button
    </Button>
  ))
  .add('Label', () => (
    <Label size='medium'>This is a Label</Label>
  ))  
  .add('TextInput', () => (
    <TextInput />
  ));  
