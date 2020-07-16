//This is where user data is stored for app wide use
import { createStore } from "redux";
import userReducer from "./reducers/userReducer"; //Login and Logout functions reside here

//When the user joins, all the data is clear
const initialState = {
  loggedIn: false,
  uid: "",
  userName: "",
  email: "",
};

const store = createStore(userReducer, initialState); //Simply creates the store before export

export default store;
