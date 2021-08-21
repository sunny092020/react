import { useRef } from "react";
import "./login.css";
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const username = useRef();
  const password = useRef();

  const dispatch = useDispatch()

  const handleClick = (e) => {
    const userCredentails = {
      "username" : username.current.value,
      "password" : password.current.value
    };
    
    axios.post("/auth/login", userCredentails
    ).then(function (response) {
      dispatch(login(response.data));
      history.push("/");
    })
    .catch(function (error) {
      alert(error);
    });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">My app</h3>
          <span className="loginDesc">
            This is login screen.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <Button className="loginButton" onClick={handleClick}>Log In</Button>
            <Link to="/register">
              <button className="loginRegisterButton">"Create a New Account"</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
