import React from 'react';

let LoginForm = () => {
  return (
    <form action="../../index2.html" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </div>
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
      </div>
    </form>
    )
}

export default LoginForm;
