import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar">
      <Link to="/Home">
        <h1 className="h1" href="/Home">
          Interlink
        </h1>
      </Link>
      <ul className="ul">
        <Link to="/applications" className="li">
          All Applications
        </Link>
        <Link className="li" to="/admin">Admin</Link>
        <Link className="li" to="/SignUp">Sign up</Link>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};

export default Header;
