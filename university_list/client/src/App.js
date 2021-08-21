import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Newsletter from "./pages/newsletter/Newsletter";
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.value)
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/newsletter">
            {user ? <Newsletter /> : <Login />}
          </Route>
          <Route exact path="/">
            {user ? <Home /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
