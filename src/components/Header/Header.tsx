import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <Link to='/'>
            <li>Home page</li>
          </Link>
          <Link to='/jackpot'>
            <li>Jackpot</li>
          </Link>
        </ul>
      </header>
    );
  }
}