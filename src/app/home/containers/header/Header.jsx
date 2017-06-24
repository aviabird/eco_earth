import React, { Component } from 'react';
import Searchbar from '../../components/search_bar/SearchBar';
import './Header.css';
import { Navbar, FormGroup, FormControl, Button, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap';
import Logo from './../../../../assets/images/logo.png';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  onSearched(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img className="logo" src={Logo} alt="EcoEarth"/>
              EcoEarth
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Topics" className="search-input" />
            </FormGroup>
            <Button className="search-btn" type="submit">
              <FontAwesome
                className='super-crazy-colors'
                name='search'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </Button>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default Header;