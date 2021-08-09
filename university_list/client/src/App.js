import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import UniversityList from "./pages/universityList/UniversityList";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Newsletter from "./pages/newsletter/Newsletter";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/universities">
            <UniversityList />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/newsletter">
            {user ? <Redirect to="/" /> : <Newsletter />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
