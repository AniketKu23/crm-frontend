import React from "react";
// import PropTypes from 'prop-types';
import { Jumbotron } from "react-bootstrap";
import "./EntryStyle.css";
import { LoginForm } from "../../components/login/LoginComp";
import { useState } from "react";
import { ResetPassword } from "../../components/password-reset/PasswordResetComp";
// import { use } from 'react';

export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {frmLoad === "rest" && (
          <ResetPassword
            // handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            // email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};
