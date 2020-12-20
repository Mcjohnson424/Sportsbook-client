import sessionApi from "../../../common/api/session";
import {Router} from "next/router";
import * as ROUTES from "../../../../constants/routes";
import {compose} from "recompose";
import withLocale from "../../../hocs/withLocale";
import withFirebase from "../../../hocs/withFirebase";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const ERROR_CODE_ACCOUNT_EXISTS =
    'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;




class SignInFacebookBase extends Component {
    constructor(props) {
        super(props);

        this.state = { error: null };
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithFacebook()
            .then(authResult => authResult.user.getIdToken()) // Get user ID token from Firebase
            .then(sessionApi.start) // Send to our server and start the session
            .then(() => {
                this.setState({ error: null });
                Router.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({ error });
            });

        event.preventDefault();
    };

    render() {
        const { error } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Button variant="primary" type="submit">
                    Sign In With Facebook
                </Button>
                {error && <Alert variant="danger">{error.message}</Alert>}
            </Form>
        );
    }
}

const SignInFacebook = compose(
    withLocale,
    withFirebase,
)(SignInFacebookBase);