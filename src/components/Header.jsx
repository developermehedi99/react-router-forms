import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="m-5">
        <Link to="/">Home</Link>
        <Link className="mx-4" to="/about">
          About
        </Link>
        <NavLink to="/posts">Posts</NavLink>
        <Link className="mx-4" to="/contact">
          Contact
        </Link>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
