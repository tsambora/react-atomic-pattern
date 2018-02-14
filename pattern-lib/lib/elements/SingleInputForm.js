import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Label from './Label';
import TextInput from './TextInput';

const styles = {
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInputWrapper: {
    display: 'flex',
    marginRight: '.5rem',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
  }
};

export default class SingleInputForm extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();

    if (this.input.value.length) {
      this.props.onClick(this.input.value);
    }
  }

  render() {
    const { label } = this.props;

    return (
      <div>
        {label ?
          <Label>{label}</Label>
          : null}
        <div style={styles.inputWrapper}>
          <div style={styles.textInputWrapper}>
            <TextInput innerRef={(input) => this.input = input} />
          </div>
          <div style={styles.buttonWrapper}>
            <Button onClick={this.handleSubmit}>{this.props.buttonLabel}</Button>
          </div>
        </div>
      </div>
    );
  }
}

SingleInputForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

