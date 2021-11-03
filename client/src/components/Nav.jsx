import { Link } from "react-router-dom";
import { logout } from "../services";

const Nav = (props) => {
  const handleClick = async () => {
    // logout the user
    await logout();
    // remove the user from state
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/new">Add a Cartoon!</Link>
      <button onClick={handleClick}>Log out!</button>
    </nav>
  );
};

export default Nav;