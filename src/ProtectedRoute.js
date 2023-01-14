import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({children, ...rest}) {
  const user = useSelector((state) => state.user);

  if(!user || !user.userName ) {
    return (<Redirect to='/login' />)
  }

  return (<Route {...rest}>{children}</Route>)
}

export default ProtectedRoute;