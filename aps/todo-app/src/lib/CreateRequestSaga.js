import { call, delay, put } from "redux-saga/effects";

export const createRequestActionTypes = (type) => {
  console.log("createRequestACionTypes type : ", type);
  const REQUSET = type + "_REQUEST";
  const SUCCESS = type + "_SUCCESS";
  const FAILURE = type + "_FAILURE";
  return [REQUSET, SUCCESS, FAILURE];
};

export function Request(type, request) {
  const SUCCESS = type.replace(/REQUEST/g, "SUCCESS");
  const FAILURE = type.replace(/REQUEST/g, "FAILURE");

  return function* (action) {
    try {
      const response = yield call(request, action.payload);
      console.log("호출 상공 : ", type, action);

      yield put({
        type: SUCCESS,
        payload: response?.data,
      });
    } catch (e) {
      const errorData = e.response.data;
      console.error("errorData = ", errorData);

      yield put({
        type: FAILURE,
        payload: errorData,
        error: true,
      });
    }
  };
}
