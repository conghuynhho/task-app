import "./menu.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect} from "react";


const url = {
  home: "/",
  contact: "contact",
  todolist: "todolist"
}


export default function Menu() {
  let locationAPI = useLocation();
  let location = locationAPI.pathname;

  function removeActive() {
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    const todolist = document.getElementById('todolist');

    home.classList.remove('active');
    contact.classList.remove('active');
    todolist.classList.remove('active');
  }

  function addActive(element){
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    const todolist = document.getElementById('todolist');
    const eleArray = [home,contact,todolist];

    element.classList.add('active');
    const resultArray = eleArray.filter((ele)=> ele !== element);
    resultArray.map((ele)=>{
      ele.classList.remove('active');
      return 0;
    })
  }
  // khi moi render xong thi se check la dang o page nao 
  /**sau khi check se co 3 truong hop:
   *    1 la o page dung bao gom: home, contact, todolist
   * => khi o page dung thi thuc hien function them vao element tuong ung va xoa class o element con lai
   *    2 la o page sai 
   * => khi o page sai thi xoa class o toan bo element
   */
  useEffect(() => {
    if (location.startsWith(url.contact,1)) {
      const contact = document.getElementById('contact')
      addActive(contact);
      return;
    }
    if (location.startsWith(url.todolist,1)) {
      const todolist = document.getElementById('todolist');
      addActive(todolist);
      return;
    }
    if (location === (url.home)) {
      const home = document.getElementById('home');
      addActive(home);
      return ;
    }
    removeActive();
  }, [location])

  return (
    <div className="menu-wrapper">
      <nav className="menu-container">
        <ul className="menu">
          <li>
            <Link id="home" to="/">Home</Link>
          </li>
          <li>
            <Link id="contact" to="/contact">Contact</Link>
          </li>
          <li>
            <Link id="todolist" to="/todolist">Todo List</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
