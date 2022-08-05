import { observer } from "mobx-react-lite";
import React, { FC, isValidElement, useContext, useState } from "react";
import { Context } from "../index";
import Loader from "./Loader";
import { LoginFormContainer } from "./styles/LoginFormStyles";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [statelogin, setStateLogin] = useState(true);

  const [validEmail, setValidEmail] =useState(true);
  const [validPassword, setValidPassword] =useState(true);

  const { store } = useContext(Context);

  

  const checkEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
  const checkPassword = (password: string) => /[0-9]/.test(password)

  const handleLogin = (statelogin: boolean) => {
    !checkEmail(email) ? setValidEmail(false) : setValidEmail(true);
    !checkPassword(password) ? setValidPassword(false) : setValidPassword(true);

    if(checkEmail(email) && checkPassword(password)) {
      statelogin ? store.login(email, password) : store.registration(email, password)
    }
  }
  

  return (
    <LoginFormContainer>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
        className={`lf-input${validEmail ? "" : " error"}`}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        className={`lf-input${validPassword ? "" : " error"}`}
      />
      <div className="lf-buttons">
        {statelogin ? (
          <>
            <div
              className={!store.isButtonLoader ? "lf-button" : "lf-button disabled"}
              onClick={() => handleLogin(statelogin)}
            >
              {store.isButtonLoader ? <Loader /> : "Login"}
            </div>
            <div className="lf-header" onClick={() => setStateLogin(false)}>
              Register
            </div>
          </>
        ) : (
          <>
            <div
              className={!store.isButtonLoader ? "lf-button" : "lf-button disabled"}
              onClick={() => store.registration(email, password)}
            >
              {store.isButtonLoader ? <Loader /> : "Registration"}
            </div>

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
