import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import { useHistory } from 'react-router-dom';

function Header({ onVideoSearch }) {
  const history = useHistory();

  return (
    <div>
      <header className="app-header">
        <h1 className="logo" onClick={() => history.push('/')}>MeTube</h1>
        <SearchBar 
          onVideoSearch={onVideoSearch}
        />
      </header>
    </div>
  );
}

export default Header;
