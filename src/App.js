import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Sidebar from './components/Sidebar'
import Table from './components/table'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path = '/' element={<SignIn />}/>
    <Route path = '/SignUp' element={<SignUp />} />
    <Route path = '/SignIn' element={<SignIn />} />
 </Routes>
    
    </Router>
    </div>
   
  );
}

export default App;
