import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../lib/elements/Button';
import Label from '../lib/elements/Label';
import TextInput from '../lib/elements/TextInput';

import SingleInputForm from '../lib/elements/SingleInputForm';

import Header from '../lib/elements/Header';

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

storiesOf('Organisms', module)
  .add('Header', () => (
    <Header
      links={
        [
          { label: 'link 1', onClick: () => alert('link 1 clicked') },
          { label: 'link 2', onClick: () => alert('link 2 clicked') }
        ]}
      onSearch={(text) => alert(text)}
      title='My website'
    />
  ));