//Updates the store with information relating to user login. Type is always LOGIN or LOGOUT and payload contains user info needed for the app to function properly
function update_login(givenType, givenPayload) {
  return { type: givenType, payload: givenPayload };
}

export default update_login;
