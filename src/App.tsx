import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'hoc/Dashboard';
import Login from 'views/Login';
import Signup from 'views/Signup';
import Home from 'views/Home';
import Messages from 'views/Messages';
import FindFriends from 'views/FindFriends';
import Notifications from 'views/Notifications';
import Profile from 'views/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Dashboard>
            <Profile></Profile>
          </Dashboard>
        </Route>
        <Route path="/notifications">
          <Dashboard>
            <Notifications></Notifications>
          </Dashboard>
        </Route>
        <Route path="/messages">
          <Dashboard>
            <Messages></Messages>
          </Dashboard>
        </Route>
        <Route path="/findfriends">
          <Dashboard>
            <FindFriends></FindFriends>
          </Dashboard>
        </Route>
        <Route path="/home">
          <Dashboard>
            <Home></Home>
          </Dashboard>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
