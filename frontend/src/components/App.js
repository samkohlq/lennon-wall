import * as firebaseui from "firebaseui";
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { saveUsername } from "../actions/saveUsername";
import Wall from "../components/Wall";
import firebase from "../firebase";
import "./App.css";

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class App extends React.Component {
  componentDidMount() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          this.props.dispatch(saveUsername(authResult.user.displayName));
        },
      },
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  render() {
    console.log(this.state);
    const {
      match: { params },
    } = this.props;
    const wallName = params.wallName || "defaultwall";
    return (
      <Container>
        <div id="firebaseui-auth-container"></div>
        <Wall wallName={wallName} />
      </Container>
    );
  }
}

export default connect()(App);
