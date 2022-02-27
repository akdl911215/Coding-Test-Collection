import { createRequestSaga } from "../lib/CreateRequestSaga";

const [
  REGISTERCONTENT_REQUEST,
  REGISTERCONTENT_SUCCESS,
  REGISTERCONTENT_FAILURE,
] = createRequestSaga("REGISTERCONTENT");

export const registerContentAction = (content) => {
  console.log("content : ", content);
  return {
    type: REGISTERCONTENT_REQUEST,
    payload: content,
  };
};

export const intialState = {
  RegisterContentData: null,
  RegisterContentData_apiRequest: false,
  RegisterContentData_apiRequestError: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case REGISTERCONTENT_REQUEST:
      return {
        ...state,
        RegisterContentData: null,
        RegisterContentData_apiRequest: false,
        RegisterContentData_apiRequestError: null,
      };

    case REGISTERCONTENT_SUCCESS:
      return {
        ...state,
        RegisterContentData: action,
        RegisterContentData_apiRequest: true,
      };
    case REGISTERCONTENT_FAILURE:
      return {
        ...state,
        RegisterContentData_apiRequest: false,
        RegisterContentData_apiRequestError: action.error,
      };
  }
};
