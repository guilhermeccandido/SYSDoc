import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Sys<span className="logo-doc">DOC</span></div>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar documento" />
        <img src="path/to/pesquisa.png" alt="Pesquisar" className="search-icon" />
      </div>
      <div className="user-icon">
        <img src="path/to/user.png" alt="User" />
        {}
      </div>
    </header>
  );
}

export default Header;
