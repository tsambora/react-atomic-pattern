import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SingleInputForm from './SingleInputForm';

export default function SingleFormPage({
  formLabel,
  formButtonLabel,
  onSubmit,
}) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        overflow: 'auto',
        background: 'rgba(51,51,51,0.7)',
      }}
    >
      <Header
        links={
          [
            { label: 'link 1', onClick: () => alert('link 1 clicked') },
            { label: 'link 2', onClick: () => alert('link 2 clicked') }
          ]}
        onSearch={(text) => alert(text)}
        title='My website'
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'light-grey',
          height: '100%',
          width: '100%'
        }}
      >
        <div
          style={{
            marginTop: '-6rem',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <SingleInputForm
            buttonLabel={formButtonLabel}
            label={formLabel}
            onClick={(text) => onSubmit(text)}
          />
        </div>
      </div>
    </div>
  );
}

SingleFormPage.propTypes = {
  formButtonLabel: PropTypes.string,
  formLabel: PropTypes.string,
  onSubmit: PropTypes.func,
};