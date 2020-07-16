//These are the main functions that will control the store's view of user data
function userReducer(state = {}, { type, payload }) {
  switch (type) {
    case "LOGIN": //When user is first getting in, populates store
      return {
        loggedIn: true,
        uid: payload.uid,
        userName: payload.userName,
        email: payload.email,
      };
    case "LOGOUT": //Clears all the fields
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
