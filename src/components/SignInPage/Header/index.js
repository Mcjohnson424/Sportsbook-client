import React from 'react';
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import Logo from '../../Logo';

export default function Header() {
  return (
      <header
          id="auth-header"
          className="auth-header"
          style={{backgroundImage: 'url(assets/images/Background_Dark.svg)'}}
      >
        <Logo className="mb-5" color="#afc0ff" height="140"/>
      </header>
  );
}
