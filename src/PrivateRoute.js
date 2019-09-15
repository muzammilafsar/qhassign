import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

function LoginForm({ component: Component,isAuthenticated , ...all }) {
    return (
        <React.Fragment>
         <Route {...all} render={(props) => (
            isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
        </React.Fragment>
    );
}

export default LoginForm;
