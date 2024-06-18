import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div>
      <div className="ifdj">
        <h1>InterLink</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/create">
          <button>Create Account</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
