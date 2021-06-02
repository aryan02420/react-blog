import { Link } from "react-router-dom";
import logo from '@/assets/svg/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo"/>
        <h1>React Blog</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/new">New</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;