import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import Task from './pages/Task'

const App=()=> {
  return (
    <Router>
      <div>
        <Link to="/">Login</Link>
      </div>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/task">Task</Link>
      </div>
      <div>
        <Link to="/user">User</Link>
      </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
