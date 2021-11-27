import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import WebSite from './Pages/WebSite';
import { useEffect, useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
      
  const childStateName = (state) => {
    setUserName(state);
  }

  const childStatePass = (state) => {
    setUserPass(state);
  }

  return (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/"><SignIn getUserName={childStateName} getUserPass={childStatePass}/></Route>
        <Route path="/thuvien"><WebSite name={userName} pass={userPass}/></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
