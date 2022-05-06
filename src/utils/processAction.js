import request from "@utils/api";

const processAction = async (dispatch, opt) => {
  dispatch({
    type: opt.request,
    payload: { params: opt.params, body: opt.body }
  });

  const result = await request[`${opt.action}`](
    `${opt.service}${opt.params ? "?" + opt.params : ""}`,
    opt.body || "",
    opt.token
  );

  if (result.error) {
    dispatch({
      type: opt.failed,
      payload: result,
      params: opt.params,
      body: opt.body
    });
  } else {
    dispatch({ type: opt.success, payload: result });
  }

  return result;
};

export default processAction;
