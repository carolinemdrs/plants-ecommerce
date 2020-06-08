import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "..containers/Home";
import Product from "../containers/product"

export const routes = {
  home: "/",
  product: "/product",

};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>
            <Route exact path={routes.home} component={Home}/>
        </Switch>
      </ConnectedRouter>
    );
  
}

export default Router;