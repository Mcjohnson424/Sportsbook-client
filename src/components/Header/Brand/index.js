import React from 'react';
import Logo from '../../Logo';

export default function Brand() {
  return (
      <div className="top-bar-brand d-block" style={{width: '75px', paddingTop: '11px'}}>
        <Logo height="25" color="#c4afff"/>
      </div>
  );
}
