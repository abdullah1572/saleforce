import './App.scss';
import React from 'react';
import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Assets/pilot/PilotCommandCondensed-vmepL.woff'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin/adminlog';
import Adminregis from './components/AdminRegister/adminregis';
function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/Login' component={AdminLogin} />
          <Route exact path='/Register' component={Adminregis} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
