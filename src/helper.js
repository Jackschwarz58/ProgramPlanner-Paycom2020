import store from "./store/index";
import update_login from "./store/actions/userActions";
import axios from "axios"; //Nicer API calls

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
      break;
  }
}

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

export function updateAttendees() {
  return axios({
    method: "post",
    url: "http://192.168.64.2/paycomProject/api/updateAttendees.php",
  }).catch((e) => {
    window.alert(e.response.statusText);
  });
}
