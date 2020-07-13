function userReducer(state = {}, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return {
        loggedIn: true,
        uid: payload.uid,
        userName: payload.userName,
        email: payload.email,
      };
    case "LOGOUT":
      return {
        loggedIn: false,
        uid: "",
        userName: "",
        email: "",
      };
    default:
      return state;
  }
}

export default userReducer;
