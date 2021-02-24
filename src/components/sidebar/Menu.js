import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
      <div className="menu-wrapper">
        <nav className="menu-container">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}
