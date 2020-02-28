import * as firebaseui from "firebaseui";
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { saveUsername } from "../actions/saveUsername";
import AddPost from "../containers/AddPost";
import PostsListContainer from "../containers/PostsListContainer";
import firebase from "../firebase";
import "./App.css";

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class App extends React.Component {
  componentDidMount() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          this.props.dispatch(saveUsername(authResult.user.displayName));
        }
      },
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <Container>
        <h1 className="mt-5">{params.wallName}</h1>
        <div id="firebaseui-auth-container"></div>
        <AddPost wallName={params.wallName} />
        <PostsListContainer wallName={params.wallName} />
      </Container>
    );
  }
}

export default connect()(App);
