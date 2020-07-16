import store from "./store/index"; //For user Data access and manipulation
import update_login from "./store/actions/userActions";
import axios from "axios"; //Nicer API calls

/**
 * Updates user login state in the Redux store. This is how the whole app interacts with the store
 * and is the main place that the reducer functions are called. The Logout case also calls the logout PHP api
 * that clears the cookie set on login
 * @param {string} type The type of update being performed (LOGIN or LOGOUT)
 * @param {object} payload The information about the user, used for logging in
 */
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
    case "LOGOUT": //Calls API for cookie cleanup
      return axios({
        method: "post",
        url: "http://192.168.64.2/paycomProject/api/logout.php",
      })
        .then((results) => {
          return results;
        })
        .catch((e) => {
          window.alert(e.response.statusText);
        });
  }
}

/**
 * Calls signup API and send over the new user data to be added to the database
 * @param {object} registerState The information about the user account being created
 */
export async function userSignUp(registerState) {
  await axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/signup.php",
    data: {
      signupSubmit: true, //Sends flag for call origin and needed data for signup
      state: registerState,
    },
  });
}

/**
 * Sets user login cookie in the API call, and then calls update_login to update redux store
 * @param {object} loginState The information about the user being logged in
 * @param {object} rememberCheck The state of the Remember Me checkbox on the login screem
 */
export async function setUserLogin(loginState, rememberCheck) {
  await axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/login.php",
    data: {
      //Sends a flag confirming call origin and the necessary info for login
      loginSubmit: true,
      state: loginState,
      rememberUsr: rememberCheck,
    },
  }).then(({ data }) => {
    updateLogin("LOGIN", {
      loggedIn: true,
      uid: data.uid,
      userName: data.userName,
      email: data.email,
    });
  });
}

/** Calls the check.php API to see if a cookie is set with user attributes. if there is one present, the success code
 * is sent out. Otherwise an error message is shown. This is used in Dashboard for a redirect check
 */
export function checkLogin() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/check.php",
  })
    .then(({ data, status }) => {
      //API defined success status number
      //Logs the user back in and sets store vars
      if (status === 201) {
        updateLogin("LOGIN", {
          loggedIn: true,
          uid: data.login_usr_id,
          userName: data.login_usr_name,
          email: data.login_usr_email,
        });
      }
      return status;
    })
    .catch((e) => {
      window.alert(e.response.statusText);
    });
}

/** Gets list of sessions that have a relationship with the user. This is found in the sessions API where the
 * database is queried and the results are returned here and used to build the Dashboard view
 */
export function getUserSessions() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "getUserSessions",
      userId: store.getState().uid,
    },
  })
    .then((results) => {
      updateAttendees();
      return results;
    })
    .catch((e) => {
      window.alert(e.response.statusText);
    });
}

/**
 *  Gets a list of all the created sessions for the user to join in Navbar. API just calls all sessions from database
 */
export function getAllSessions() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "getAllSessions",
    },
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}

/**
 * Makes a new session object with template data and passes it to the API which then adds it to the database. It also
 * creates a relationship with the user who created it
 */
export function addSession() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "addSession",
      session: {
        sessionName: "New Session...",
        sessionTime: Date.now(),
        sessionDesc: "Your Description...",
        sessionAttendees: 1,
      },
      userId: parseInt(store.getState().uid),
    },
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}

/**
 * Calls the API to create a relationship between the selected session and the current user
 * @param {int} id The ID of the session the user is adding to their session list
 */
export function addRelationship(id) {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "addRelationship",
      sessionId: id,
      userId: parseInt(store.getState().uid),
    },
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}

/**
 * Passes the specifiec session object to the API to be revised in the database
 * @param {object} attributes The session Object to be edited
 */
export function editSession(attributes) {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "editSession",
      session: attributes,
    },
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}

/**
 * This calls the API to removed the specified session from the current user's list
 * @param {int} id The ID of the session being unpaired with the user
 */
export function deleteSession(id) {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/sessions/sessions.php",
    data: {
      functionname: "deleteSession",
      sessionId: id,
      userId: parseInt(store.getState().uid),
    },
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}
/**
 * Calls an API to recalculate attendee numbers for all sessions
 */
export function updateAttendees() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/updateAttendees.php",
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}
