import React, { Component } from "react";
import Avatar from "react-avatar";
import firebase from "firebase";
import database from "../../index.js";
import { connect } from "react-redux";
import { authentication } from "../../store/modules/login/actions";

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
    var user = this.state.user;
    if (user) {
      return <Avatar src={user.photoURL} size={40} />;
    }
    return (
      <button onClick={this.authenticate.bind(this)}>Login with Google</button>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: auth.isAuthenticated
  };
}

export default connect(mapStateToProps, { authentication })(Login);
