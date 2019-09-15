import React, { useState } from 'react';
import "./Login.scss";
import Loader from '../../Molecules/Loader/Loader';

function LoginForm({ onSubmit, showError, errorMsg, loading }) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (
        <React.Fragment>
            <Loader loading={loading} />
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ username, password });
            }}>
                <div className="form-group">
                    <label htmlFor="username" className="label" >Username</label>
                    <input type="text" disabled={loading} className="form-control" id="username" placeholder="Enter email" value={username} onChange={(e) => setusername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label" >Password</label>
                    <input type="password" disabled={loading} className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    <small id="emailHelp" class="form-text text-muted">{errorMsg}</small>
                </div>
                <button type="submit" className="btn" disabled={loading} >Login</button>
            </form>
        </React.Fragment>
    );
}

export default LoginForm;
