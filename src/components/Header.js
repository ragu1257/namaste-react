import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Header;
