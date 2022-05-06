import { setToken, deleteToken } from "@utils/localStorage";

/* ------------- ACTION TYPES ------------- */
export const actionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  REMOVE_AUTH_TOAST: "REMOVE_AUTH_TOAST"
};

/* ------------- INITIAL STATE ------------- */

const defaultState = {
  fetching: false,
  data: null,
  error: null,
  toast: null
};

// Reducer
const INITIAL_STATE = {
  accessToken: null,
  accessKey: null,
  isAuthenticated: false,
  id: null,
  selected: false,

  fetching: false,
  data: null,
  error: null,
  toast: null
};

/* ------------- INITIAL STATE ------------- */

export const actionCreators = {
  removeAuthToast: () => ({ type: actionTypes.REMOVE_AUTH_TOAST }),
  login: (payload) => ({ type: actionTypes.LOGIN, payload })
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_AUTH_TOAST:
      return Object.assign({}, state, { authToast: null });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        isLoading: true,
        errors: null
      });

    case actionTypes.LOGIN_SUCCESS:
      setToken(action.payload.access_token);
      return Object.assign({}, state, {
        accessToken: action.payload.access_token,

        login: {
          user: action.payload.user,
          isAuthenticated: true,
          isLoading: false,
          errors: null
        },

        toast: {
          message: "Login Success!",
          type: "success",
          request: "post"
        }
      });

    case actionTypes.LOGIN_FAILED:
      return Object.assign({}, state, {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        accessToken: null,
        errors: action.errors,
        authToast: {
          message: "Please try again. Email or password did not match!",
          type: "failed",
          request: "post"
        }
      });
    default:
      return state;
  }
};
