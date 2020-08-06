import app from "firebase/app";
import "@firebase/auth";
import config from "../firebase.config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }
    this.instance = app;
    this.auth = app.auth();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***
  doEmailVerification = (code) => this.auth.applyActionCode(code);
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  doSignOut = () => this.auth.signOut(); // Return so we can extend the chain later
}

export default Firebase;
