import { Routes, Route } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import LandingPage from './pages/Landing';
import EducationPage from './pages/EducationPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/layout/Footer.js';
import NavBar from './components/layout/NavBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import QuizPage from "./components/Quiz/Quiz.js";


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

  if (currentUser) {
    let point = 0;
    const db = getDatabase();
    let userId = getAuth().currentUser.uid;
    const userInfo = ref(db, "users/" + userId);
    onValue(userInfo, (snapshot) => {
        point = snapshot.val().points;
    })

    return (
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage isLoggedIn={true} />} /> 
            <Route exact path='/education' element={<EducationPage />} />
            <Route exact path='/point' element={<AccountPage point={point}/>} />
            <Route exact path='/quiz' element={<QuizPage currentUser={currentUser}/>} />
          </Routes>
          <Footer></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage isLoggedIn={false}/>} />
            <Route exact path='/education' element={<LandingPage />} />
            <Route exact path='/point' element={<LandingPage />} />
            <Route exact path='/quiz' element={<LandingPage />} />
          </Routes>
          <Footer></Footer>
      </div>
    )
  }
}

export default App;