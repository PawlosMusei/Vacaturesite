import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Create = () => {
  return (
    <div>
      <div className="createForm">
        <label>Name</label>
        <input type="text"  minlength="3" maxlenght="6"/>
        <label>Surname</label>
        <input type="text" maxlenght="5" required/>
        <label>E-mail</label>
        <input type="email" id="email" pattern=".+@example\.com" size="30" required />
        <label>Phonenumber</label>
        <input type="number" id="tentacles" name="tentacles" min="10" max="100" required/>
        <label>Password:</label>
        <input type="password" id="pass" name="password" minlength="8" required />
        <button>Submit</button>
        <Link to="/login"  className="createFormLink">
          <p>Login</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
