import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;
  isButtonLoader = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setIsButtonLoader(bool: boolean) {
    this.isButtonLoader = bool;
  }

  async login(email: string, password: string) {
    this.setIsButtonLoader(true);
    try {
      const response = await AuthService.login(email, password);
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        this.setIsButtonLoader(false);
    } catch (err) {
      console.log("Error response");
      /* console.log(err.response.data.message); */
    } finally {
      
    }
  }

  async registration(email: string, password: string) {
    this.setIsButtonLoader(true);
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setIsButtonLoader(false);
    } catch (err) {
      console.log("Error response registration");
      /* console.log(err.response.data.message); */
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (err) {
      console.log("Error response");
      /* console.log(err.response.data.message); */
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log("______________");
      console.log(typeof response);

      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log("Error response refresh");
      console.log(err);

      /* console.log(err.response.data.message); */
    } finally {
      this.setLoading(false);
      console.log("finall");
    }
  }
}
