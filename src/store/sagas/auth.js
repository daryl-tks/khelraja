/* eslint-disable import/no-anonymous-default-export */
import { takeLatest } from "redux-saga/effects";
import processAction from "@utils/processAction";
import { actionTypes } from "../reducers/auth";

/* ------------- WORKERS ------------- */

function* postLogin({ body }) {
  yield processAction({
    body,
    method: "post",
    service: `/login`,
    success: actionTypes.POST_LOGIN_SUCCESS,
    failed: actionTypes.POST_LOGIN_FAILED,
  });
}

/* ------------- WATCHERS ------------- */

function* watchAuth() {
  yield takeLatest(actionTypes.POST_LOGIN, postLogin);
}

export default [watchAuth()];
