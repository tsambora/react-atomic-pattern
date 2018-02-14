import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import SingleInputForm from './SingleInputForm';

export default function Header({ links, title, onSearch }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'grey',
        padding: '8px',
      }}
    >
      <div 
        style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start' 
        }}
      >
        {title ?
          <Label
            color='white'
            size='large'
            style={{ margin: '0 8px' }}
          >
            {title}
          </Label>
          : null}
        {links.length ?
          links.map(link => (
            <div
              key={link.label}
              onClick={() => link.onClick()}
              style={{ cursor: 'pointer', margin: '0 8px' }}
            >
              <Label
                color='blue'
                size='large'
              >
                {link.label}
              </Label>
            </div>
          )) : null
        }
      </div>
      <div style={{ display: 'flex', flex: '1', justifyContent: 'flex-end' }}>
        <SingleInputForm
          buttonLabel='Search'
          onClick={(text) => onSearch(text)}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  links: PropTypes.array,
  onSearch: PropTypes.func,
  title: PropTypes.string,
};
