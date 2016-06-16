import React from 'react';
import LoginLogo from 'components/LoginLogo/LoginLogo';
import LoginForm from 'components/LoginForm/LoginForm';

export default class Login extends React.Component {

  render() {
    return (
      <div className="login-box">
        <LoginLogo />        

        <div className="login-box-body">
          <LoginForm />
        </div>
      </div>
    )
  }

}
