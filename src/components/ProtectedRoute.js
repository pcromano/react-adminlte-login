import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./Auth";
import Login from "./Login"

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
          console.log(Login.props)
          return
        if (props) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
