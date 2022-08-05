import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";
import "./app.css";



const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return (
      <div className="app">
        <LoginForm />
      </div>
    );
  }

  return (
    <div>
      <h1>
        {`User is authorized ${store.user.email}`}
      </h1>
      <div>___________________</div>
      <h1>
        {store.user.isActivated
          ? `Account verified by email ${store.user.email}`
          : `Verify your account email ${store.user.email}`}
      </h1>
      <div>___________________</div>
      <button
        onClick={() => {
          store.logout();
          setUsers([]);
        }}
      >
        Logout
      </button>
      <div>___________________</div>
      <div>
        <button disabled={!store.user.isActivated} onClick={() => getUsers()}>
          Get users
        </button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(App);
