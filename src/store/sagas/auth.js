import { takeLatest } from "redux-saga/effects";
import processAction from "@utils/processAction";
import { actionTypes } from "../reducers/auth";

// import { login as loginService } from "./service";

/* ------------- SERVICE ------------- */

const loginService = (verification) => {
  // ex: verification[number]=639954870808&verification[code]=9351
  // return api.post("/verifications/verify_login", verification, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
};

/* ------------- WORKERS ------------- */

function* login({ payload }) {
  yield processAction({
    service: loginService,
    params: payload,
    success: actionTypes.LOGIN_SUCCESS,
    failed: actionTypes.LOGIN_FAILED
  });
}

/* ------------- WATCHERS ------------- */

function* watchAuth() {
  yield takeLatest(actionTypes.LOGIN, login);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAuth()];
