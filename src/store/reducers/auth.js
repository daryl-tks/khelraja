/* eslint-disable import/no-anonymous-default-export */
import { setToken, deleteToken } from "@utils/localStorage";

/* ------------- ACTION TYPES ------------- */
export const actionTypes = {
  POST_LOGIN: "POST_LOGIN",
  POST_LOGIN_SUCCESS: "POST_LOGIN_SUCCESS",
  POST_LOGIN_FAILED: "POST_LOGIN_FAILED",

  LOGOUT: "LOGOUT",
  REMOVE_AUTH_TOAST: "REMOVE_AUTH_TOAST",
};

/* ------------- INITIAL STATE ------------- */

const defaultState = {
  fetching: false,
  data: null,
  error: null,
  toast: null,
};

// Reducer
const INITIAL_STATE = {
  isAuthenticated: false,
  accessToken: null,
  accessKey: null,
  postLogin: defaultState,
};

/* ------------- INITIAL STATE ------------- */

export const actionCreators = {
  removeAuthToast: () => ({
    type: actionTypes.REMOVE_AUTH_TOAST,
  }),
  postLogin: (body) => ({
    type: actionTypes.POST_LOGIN,
    body,
  }),
  logout: () => ({
    type: actionTypes.LOGOUT,
  }),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_AUTH_TOAST:
      return Object.assign({}, state, {
        // ...INITIAL_STATE,
        postLogin: {
          ...INITIAL_STATE.postLogin,
          toast: null,
        },
      });

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {
        ...INITIAL_STATE,
      });

    case actionTypes.POST_LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: action.body.isAuthenticated,

        postLogin: {
          toast: {
            message: "Login Success!",
            type: "success",
            request: "post",
          },
        },
      });

    // case actionTypes.POST_LOGIN_SUCCESS:
    // setToken(action.payload.access_token);
    // return Object.assign({}, state, {
    //   postLogin: {
    //     toast: {
    //       message: "Login Success!",
    //       type: "success",
    //       request: "post",
    //     },
    //   },

    // accessToken: action.payload.access_token,
    // login: {
    //   user: action.payload.user,
    //   isAuthenticated: true,
    //   isLoading: false,
    //   errors: null,
    // },
    // });

    // case actionTypes.POST_LOGIN_FAILED:
    //   console.log("FAILED", action);
    //   return Object.assign({}, state, {
    //     ...state,
    //     isAuthenticated: false,
    //     isLoading: false,
    //     accessToken: null,
    //     errors: action.errors,
    //     authToast: {
    //       message: "Please try again. Email or password did not match!",
    //       type: "failed",
    //       request: "post",
    //     },
    //   });
    default:
      return state;
  }
};
