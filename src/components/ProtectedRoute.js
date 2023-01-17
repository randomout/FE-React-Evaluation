import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

/**
 * Simple route component that checks for logged in user prior
 * to rendering a route.  If no user data is present a <Redirect>
 * will be rendered instead that sends user to '/login' route.
 */
export function ProtectedRoute({children, ...rest}) {
  const user = useSelector((state) => state.user);

  if(!user || !user.userName ) {
    return (<Redirect to='/login' />)
  }

  return (<Route {...rest}>{children}</Route>)
}
