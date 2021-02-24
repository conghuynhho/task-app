import "./menu.css";
import { Link } from "react-router-dom";
// import UserList from "../UserInfo/components/UserList";
// import NotFound from "../UserInfo/components/UserList";
// import InfoForm from "../UserInfo/components/UserList";

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
              <Link to="/404">Not Found</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}
