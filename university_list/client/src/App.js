import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Newsletter from "./pages/newsletter/Newsletter";
import Topbar from "./components/topbar/Topbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Login />
  }
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/logout"><Logout /></Route>
          <Route path="/newsletter"><Newsletter /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
