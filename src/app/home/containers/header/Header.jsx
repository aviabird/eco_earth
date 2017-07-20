import React, { Component } from "react";
import Searchbar from "../../components/search_bar/SearchBar";
import firebase from "firebase";
import { connect } from "react-redux";
import "./Header.css";
import {
  Navbar,
  Button,
  NavDropdown,
  Nav,
  NavItem,
  MenuItem
} from "react-bootstrap";
import Login from "../../../Login/login";
import Logo from "./../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  onSearched(keyword) {
    console.log(keyword);
  }
  googleSignout() {
    firebase.auth().signOut().then(
      function() {
        console.log("Signout Succesfull");
      },
      function(error) {
        console.log("Signout Failed");
      }
    );
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
              <NavItem eventKey={1} href="#">
                <Login />
              </NavItem>
              {this.props.isAuthenticated
                ? <NavDropdown
                    eventKey={3}
                    title={this.props.currentUser.displayName}
                    id="basic-nav-dropdown"
                  >
                    <MenuItem eventKey={3.1}>My Profile</MenuItem>
                    <MenuItem eventKey={3.2}>Setting</MenuItem>
                    <MenuItem divider />
                    <MenuItem
                      eventKey={3.3}
                      onClick={this.googleSignout.bind(this)}
                    >
                      Logout
                    </MenuItem>
                  </NavDropdown>
                : " "}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: auth.isAuthenticated,
    currentUser: auth.currentUser
  };
}

export default connect(mapStateToProps)(Header);
