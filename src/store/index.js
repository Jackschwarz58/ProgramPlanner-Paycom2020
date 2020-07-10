import { createStore } from "redux";
import userReducer from "./reducers/userReducer";

const initialState = {
  loggedIn: false,
  uid: "",
  userName: "",
  email: "",
};

const store = createStore(
  userReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
