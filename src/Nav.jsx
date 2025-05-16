import React from 'react';
import { NavLink } from 'react-router';

function Nav() {
  return (
    <nav>
      <NavLink to='/' end>
        Landing
      </NavLink>
      <NavLink to='/about' end>
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
