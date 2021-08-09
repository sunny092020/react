import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Newsletter from "./pages/newsletter/Newsletter";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/newsletter">
          {user ? <Redirect to="/" /> : <Newsletter />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
