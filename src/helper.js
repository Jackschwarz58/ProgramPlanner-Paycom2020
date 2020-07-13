import store from "./store/index";
import update_login from "./store/actions/userActions";

export function updateLogin(type, payload) {
  //Updates the store with the given user information and effectively "logs" the user in all throughout the application
  switch (type) {
    case "LOGIN":
      store.dispatch(
        update_login("LOGIN", {
          loggedIn: payload.loggedIn,
          uid: payload.uid,
          userName: payload.userName,
          email: payload.email,
        })
      );
      break;
    case "LOGOUT":
      break;
  }
}
