import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <div className="LoginForm">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          size="30"
          required
        /> 
        <label>Password</label>
        <input
          type="password"
          id="pass"
          name="password"
          minlength="8"
          required
        />
        <button>Submit</button>
        <Link to="/create" className="LoginFormLink">
          <p>Create Account</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
