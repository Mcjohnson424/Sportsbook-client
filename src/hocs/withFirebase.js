import React from "react";
import Firebase from "../modules/firebase";
import FirebaseContext from "../contexts/FirebaseContext";

export default (WrappedPage) => {
  const WithFirebase = ({ ...props }) => {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <WrappedPage {...props} />
      </FirebaseContext.Provider>
    );
  };
  return WithFirebase;
};
