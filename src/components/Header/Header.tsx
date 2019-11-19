import React from 'react';
import { Link } from 'react-router-dom';

import './header.less';

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header>
        <ul>
          <Link to="/">
            <li>Home page</li>
          </Link>
          <Link to="/jackpot">
            <li>Jackpot</li>
          </Link>
        </ul>
      </header>
    );
  }
}
