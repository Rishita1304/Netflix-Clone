import { useState } from "react";
import "./login.scss";
import { login } from "../../authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    login({username,password}, dispatch)
  }
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register')
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
  
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
          <button className="loginButtonn" onClick={handleLogin}>Sign In</button>
          <Link to='/register'>
          <button className="signup">
            New to Netflix? <b>Sign up now.</b>
          </button>
          </Link>
          <small>
             <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
