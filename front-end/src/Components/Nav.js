import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/birds">Birds</Link>
      </h1>
      <button>
        <Link to="/birds/new">New Bird</Link>
      </button>
    </nav>
  );
}
