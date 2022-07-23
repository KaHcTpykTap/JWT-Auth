import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { LoginFormContainer } from "./LoginFormStyles";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  const [statelogin, setStateLogin] = useState(true);

  return (
    <LoginFormContainer>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <div className="lf-buttons">
        {statelogin ? (
          <>
            <button
              className="lf-button"
              onClick={() => store.login(email, password)}
            >
              Login
            </button>
            <div className="lf-header" onClick={() => setStateLogin(false)}>
              Register
            </div>
          </>
        ) : (
          <>
            <button
              className="lf-button"
              onClick={() => store.registration(email, password)}
            >
              Registration
            </button>
            <div className="lf-header" onClick={() => setStateLogin(true)}>
              Login
            </div>
          </>
        )}
      </div>
    </LoginFormContainer>
  );
};

export default observer(LoginForm);
