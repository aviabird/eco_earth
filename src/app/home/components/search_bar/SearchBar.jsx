import React from 'react';
import './SearchBar.css';
import { Button } from 'react-bootstrap';

const Searchbar = (props) => {
  return (
    <div>
      <input
        onKeyPress={(event) => props.onSearched(event.target.value)}
        className="search-bar" />
      <Button bsStyle="info">Search</Button>
    </div>
  );
}

export default Searchbar;