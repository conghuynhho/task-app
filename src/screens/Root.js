import Form from "./user/form/Form";
import NotFound from "./404/404";
import ScreenUserList from './user/list/List'
import ScreenTodoList from './todo/List'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from '../components/sidebar/Menu'
export default function ScreenRoot() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/">
          <ScreenUserList/>
        </Route>
        <Route exact path="/contact">
          <Form />
        </Route>
        <Route exact path="/todolist">
          <ScreenTodoList/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
