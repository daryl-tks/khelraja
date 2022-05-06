import { call, put } from "redux-saga/effects";
import request from "@utils/api";

export default function* newProcessAction(action) {
  const { params, body, service, success, failed, method } = action;

  const requestService = (items) =>
    request(service, { method, params, body: items });

  let payload = "";
  try {
    if (Array.isArray(body)) {
      let parameters = Object.values(body).map((item) => item);
      payload = yield call(requestService, ...parameters);
    } else {
      payload = yield call(requestService, body);
    }

    yield put({ type: success, payload });
  } catch (error) {
    yield put({ type: failed, error });
  }
}
