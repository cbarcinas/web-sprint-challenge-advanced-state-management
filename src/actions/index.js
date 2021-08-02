import axios from "axios";

// Action Constants
export const LOADING = "LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const SET_ERROR = "SET_ERROR";
export const ADD_SMURF = "ADD_SMURF";

// Action Creators

//Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAIL, payload: { err } });
    });
};

// Add a standard action that allows us to add new smurf
export const addSmurf = (name, nickname, position, description) => {
  const newSmurf = {
    name: name,
    nickname: nickname,
    position: position,
    description: description,
    id: Date.now(),
  };
  // our payload is set to the name of the variable so we can add the smurf to the current list of smurfs
  return { type: ADD_SMURF, payload: newSmurf };
};

// Add a standard action that allows us to set the value of the error message slice of state.
export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
