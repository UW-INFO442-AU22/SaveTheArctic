import React from "react";
import "../css/landing_page.css";
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

function LandingPage(props) {
  let auth = getAuth();
  const isLoggedIn = props.isLoggedIn;
  return (
    <React.Fragment>
      <div className="banner-container">
        <img
          src={require("../images/banner.jpg")}
          alt="a variety of arctic animals"
        />
        <div id="callout">
          <h1>Save the arctic wildlife, take actions today!</h1>
          <div>
            <p> Get Started </p>
            {isLoggedIn ? (
              <div className="app__headerLoggedIn">
                <button onClick={() => auth.signOut()}>Log Out</button>
              </div>
            ) : (
              <StyledFirebaseAuth
                uiConfig={firebaseUIConfig}
                firebaseAuth={auth}
                aria-label="sign in"
              />
            )}
          </div>
        </div>
      </div>

      <section className="advise--section">
        <div className="second-advise">
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>About Save the Arctic</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              Save the Arctic is part of the INFO 442 class project. It is a web
              application for helping wildlife of the Arctic that are impacted
              by global warming. By educating users about wildlife, providing
              the environmental impact of a small action, and prompting users to
              take quizzes after reading the information, Save the Arctic
              encourages its users to learn challenging issues of wildlife
              conservation and take sustainable actions to improve the living
              condition of Arctic wildlife.
            </p>
          </div>
          <div className="top-svg">
            <img
              className="svg1"
              src={require("../images/littleseal.jpg")}
              alt="polar bear on ice"
            />
          </div>
        </div>

        <div className="third-advise">
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>Current Situation</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              Over the past century, human activities have been responsible for
              almost all of the increase in greenhouse gasses in the atmosphere,
              which becomes the main contributor of global warming and thus
              brings a huge impact on the Arctic wildlife. Because of rapid
              industrialization and urbanization, the excessive amount of carbon
              emission has exacerbated global warming, which directly affects
              the wildlife in the Arctic. The loss of genetic diversity
              increases the risk of extinction of a population through
              inbreeding suppression. In addition, the amount of deleterious
              genetic variation could make the population vulnerable by
              accumulating in a small population through genetic drift.
            </p>
          </div>
          <div className="top-svg">
            <img
              className="svg1"
              src={require("../images/polarbearice.jpg")}
              alt="polar bear on ice"
            />
          </div>
        </div>

        <div className="second-advise">
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>Point & Donation System</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              You can do quizes that test your understanding of the card
              information, and earn different amount of points depending on the
              correctness. You can check how many points you have earned and the
              total amount of money that you have donated (once users get
              certain points, our website will automatically donate to a chosen
              organization for them. No redemption needed. Total amount of how
              much have been donated will be shown).
            </p>
          </div>
          <div className="top-svg">
            <img
              className="svg1"
              src={require("../images/adoptionwebsite.jpg")}
              alt="polar bear on ice"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingPage;
