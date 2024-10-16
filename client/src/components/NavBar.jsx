import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>React And Express</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
