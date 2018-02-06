import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';

const App = ({ name }) => {
  return (
    <div>
      Hello, {name}!
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
