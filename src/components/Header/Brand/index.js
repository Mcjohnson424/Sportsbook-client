import React from 'react';
import Logo from '../../Logo';

export default function Brand() {
  return (
      <div className="top-bar-brand d-block" style={{width: '75px', paddingTop: '11px'}}>
        <Logo height="25" color="#afc0ff"/>
      </div>
  );
}
