import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/Landing';
import EducationPage from './pages/EducationPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/layout/Footer.js';
import NavBar from './components/layout/NavBar';


function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
      <Routes>
        <Route path='/' element={LandingPage} />
        <Route exact path='/education' element={EducationPage} />
        <Route exact path='/account' element={AccountPage} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
