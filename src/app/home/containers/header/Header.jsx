import React, { Component } from "react";
import Searchbar from "../../components/search_bar/SearchBar";
import "./Header.css";
import {
  Navbar,
  Button,
  NavDropdown,
  Nav,
  NavItem,
  MenuItem
} from "react-bootstrap";
import Logo from "./../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  onSearched(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>
              <img className="logo" src={Logo} alt="EcoEarth" />
              EcoEarth
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="navbar-right">
            <Searchbar onSearched={this.onSearched} />
            <Nav pullRight>
              <NavItem eventKey={1} href={"/create_new"}>
                <Button className="start-new-topic" type="submit">
                  Start New Topic
                </Button>
              </NavItem>
              <NavItem eventKey={1} href="#">Login</NavItem>
              <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>My Profile</MenuItem>
                <MenuItem eventKey={3.2}>Setting</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
