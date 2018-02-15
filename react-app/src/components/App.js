import React from 'react';
import PropTypes from 'prop-types';
import { SingleFormPage } from 'atomic-pattern-lib';

const App = ({ name }) => {
  return (
    <SingleFormPage
      formButtonLabel='submit'
      formLabel='Enter email for early access'
      onSubmit={(text) => alert(text)}
    />
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
