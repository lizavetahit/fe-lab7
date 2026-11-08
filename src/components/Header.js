import React from 'react';

// Header - функціональний компонент, отримує дані через props
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
    </header>
  );
}

export default Header;
