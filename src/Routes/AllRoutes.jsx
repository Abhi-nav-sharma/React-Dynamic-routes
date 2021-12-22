import { Route, Switch } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import More from "../Pages/More";
import Products from "../Pages/Products";

export default function AllRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <More />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}
