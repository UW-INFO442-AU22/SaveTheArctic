import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import LandingPage from './pages/Landing';
import EducationPage from './pages/EducationPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/layout/Footer.js';
import NavBar from './components/layout/NavBar';
import QuizPage from "./components/Quiz/index.js";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route exact path='/education' element={<EducationPage />} />
          <Route exact path='/point' element={<AccountPage />} />
          <Route exact path='/quiz' element={<QuizPage />} />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
