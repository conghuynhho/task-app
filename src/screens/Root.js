import Form from "./user/form/Form";
import UserList from "../components/user/list/UserList";
import NotFound from "./404/404";
import { Switch, Route } from "react-router-dom";

export default function ScreenRoot() {
  return (
    <Switch>
      <Route path="/404">
        <NotFound />
      </Route>
      <Route path="/contact">
        <Form />
      </Route>
      <Route path="/">
        <UserList />
      </Route>
    </Switch>
  );
}
