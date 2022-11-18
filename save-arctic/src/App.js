import { Routes ,Route } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import LandingPage from './pages/Landing';
import EducationPage from './pages/EducationPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/layout/Footer.js';
import NavBar from './components/layout/NavBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  //authentication
  useEffect(() => {
    const auth = getAuth();

    //addEventListener
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      //cleanup
      unregisterAuthListener();
    };
  }, []);
  //user stays logedin, but need to change the UI
  console.log(currentUser);

  if (currentUser) {
    return (
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route exact path='/education' element={<EducationPage />} />
            <Route exact path='/point' element={<AccountPage />} />
          </Routes>
          <Footer></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route exact path='/education' element={<LandingPage />} />
            <Route exact path='/point' element={<LandingPage />} />
          </Routes>
          <Footer></Footer>
      </div>
    )
  }
}

export default App;