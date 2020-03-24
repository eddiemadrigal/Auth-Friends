import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Friends from './components/Friends.js';
import { Route, Link, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  // const propsWithoutComponent = {...props, component: undefined};
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login"/>;
    }
  }}/>;
};

const protectRoute = Component => props => {
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login"/>;
  }
};

const ProtectedFriends = protectRoute(Friends);

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/friends" component={Friends}/>
      {/* <Route path="/friends" component={ProtectedFriends}/> */}
    </div>
  );
}

export default App;