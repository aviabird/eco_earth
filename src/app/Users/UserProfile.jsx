import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Panel
} from "react-bootstrap";
import Avatar from "react-avatar";
import { profileUpdate } from "./../../store/modules/auth/actions";
import { Link } from "react-router-dom";
import "./UserProfile.scss";

class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    var name = this.props.match.params.name;
    this.setState({ name });
  }
  handleUpdate(event) {
    event.preventDefault();
    var name = this.name.value.trim();
    this.props.profileUpdate(
      {
        displayName: name
      },
      this.props.user.uid
    );
    this.name.value = "";
  }
  render() {
    if (!this.props.user) {
      return <h>LOADING....</h>;
    }

    return (
      <Panel className="Profile">
        <Avatar src={this.props.user.photoURL} size={140} />
        <span>
          <h1>My Profile</h1>
        </span>
        <form onSubmit={this.handleUpdate.bind(this)}>
          {this.state.name
            ? <FormGroup controlId="formControlsText">
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={ref => {
                    this.name = ref;
                  }}
                  defaultValue={this.props.user.displayName}
                />
              </FormGroup>
            : <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl.Static>
                  {this.props.user.displayName}
                </FormControl.Static>
              </FormGroup>}
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl.Static>
              {this.props.user.email}
            </FormControl.Static>
          </FormGroup>
          {this.state.name
            ? <Button className="btn-primary" type="submit">
                Submit
              </Button>
            : <Link to={`/editprofile/${this.props.user.displayName}`}>
                <Button className="btn-primary">Edit</Button>
              </Link>}
        </form>
      </Panel>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.currentUser
  };
}

export default connect(mapStateToProps, { profileUpdate })(MyProfile);
