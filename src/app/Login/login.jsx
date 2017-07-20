import React, { Component } from "react";
import Avatar from "react-avatar";
import firebase from "firebase";
import database from "../../index.js";
import { connect } from "react-redux";
import "./login.css";
import { authentication } from "../../store/modules/auth/actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.props.authentication(user);
        database.ref("users").push({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        });
      }
    });
  }

  authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result);
    });
  }

  render() {
    var user = this.props.currentUser;
    if (user) {
      return <Avatar src={user.photoURL} size={40} />;
    }
    return (
      <div>
        <button
          className="google-signin"
          onClick={this.authenticate.bind(this)}
        >
          <Avatar
            src="https://developers.google.com/identity/sign-in/g-normal.png"
            size={30}
          />
          Signin With Google
        </button>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: auth.isAuthenticated,
    currentUser: auth.currentUser
  };
}

export default connect(mapStateToProps, { authentication })(Login);
