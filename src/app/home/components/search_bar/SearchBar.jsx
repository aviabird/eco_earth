import React from 'react';
import './SearchBar.css';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Searchbar = (props) => {
  return (
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl onChange={(event) => props.onSearched(event.target.value)} type="text" placeholder="Search Topics" className="search-input" />
      </FormGroup>
      <Button className="search-btn">
        <FontAwesome
          className='super-crazy-colors'
          name='search'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </Button>
    </Navbar.Form>
  );
}

export default Searchbar;