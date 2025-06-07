export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START"
});

export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = (error) =>({
    type:"LOGIN_FAILURE",
    payload: error
})

//defines auth creators for managing the authentication state in a react context
// the actions are then dispatched to the authContext using the dispatch function
// which updates the state based on the action type and payload.