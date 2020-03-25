import React from "react";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/Friends";
import EditFriends from "./components/EditFriends";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {

  return (
    <Router>
      <div className="container">

        <nav>
          <ul>
            <li>
              <NavLink to="/login" activeClassName=".saved-active">
                <span>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/friends">
                <span>Friends</span>
              </NavLink>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/friends" component={ FriendsList }/>
            <PrivateRoute exact path="/friends/edit/:id" component={ EditFriends }/>
            <Route path="/login" component={Login}/>
            <Route component={Login}/>
          </Switch>

        </nav>

      </div>
    </Router>
  );
}

export default App;