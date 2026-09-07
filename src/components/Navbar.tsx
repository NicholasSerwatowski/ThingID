import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">ThingID</Link>

      <div>
        <Link to="/things">My Things</Link>

        <Link to="/things/add">Add Thing</Link>
      </div>
    </nav>
  );
}

export default Navbar;