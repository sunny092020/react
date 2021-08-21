import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Newsletter from "./pages/newsletter/Newsletter";
import Topbar from "./components/topbar/Topbar";
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.value)
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
          <Route path="/newsletter"><Newsletter /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
