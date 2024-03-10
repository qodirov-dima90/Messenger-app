import React from "react";
import Home from './pages/home/Home';
import Profile from './componenets/profile/Profile';
import Login from './componenets/login/Login';
import Register from './componenets/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/profile/:username'>
              <Profile />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
