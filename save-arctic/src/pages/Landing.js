import React from "react";
import "../css/landing_page.css"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseUIConfig = {
    signInOptions: [
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
      GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: "popup",
    credentialHelper: "none",
    callbacks: {
      signInSuccessWithAuthResult: () => {
        return false; 
      },
    },
  };

function LandingPage() {
    let auth = getAuth();
    return (
        <React.Fragment>
            {/* banner */}
            <div className="banner-container">
                {/* banner image */}
                <img src={require("../images/banner.jpg")} alt="a variety of arctic animals" />
                <div id="callout">
                    <h1>Save the arctic wildlife, take actions today!</h1>
                    <div>
                        <p> Get Started </p>
                        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} aria-label="sign in" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;