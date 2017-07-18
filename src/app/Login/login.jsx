import React, { Component } from "react";
import Avatar from "react-avatar";
import firebase from "firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
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
