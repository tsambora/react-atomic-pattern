import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../lib/elements/Button';
import Label from '../lib/elements/Label';
import TextInput from '../lib/elements/TextInput';

import SingleInputForm from '../lib/elements/SingleInputForm';

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

storiesOf('Molecules', module)
  .add('Single Input Form', () => (
    <SingleInputForm
      buttonLabel='Submit'
      label='Might be for search or email registration'
      onClick={(text) => alert(text)}
    />
  ));
