import "./menu.css";
import { Link,  useRouteMatch } from "react-router-dom";


const MenuLink = ({to, label, activeOnlyWhenExact })=> {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return(
    <Link to={to} id="home" className={match ? "active" : ""}>{label}</Link>
  );
}


export default function Menu() {
  console.log("render menu");
  return (
    <div className="menu-wrapper">
      <nav className="menu-container">
        <ul className="menu">
          <li>
            {/* <Link to="/" id="home">Home</Link> */}
            <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
          </li>
          <li>
            {/* <Link to="/contact" id="contact">Contact</Link> */}
            <MenuLink to="/contact" label="Contact" activeOnlyWhenExact={true} />
          </li>
          <li>
            {/* <Link to="/todolist" id="todolist">Todo</Link> */}
            <MenuLink to="/todolist" label="Todo" activeOnlyWhenExact={false} />
          </li>
        </ul>
      </nav>
    </div>
  )
}
