import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export function getTopNewsRequest() {
  console.log("Callone");
  return {
    type: GET_NEWS_REQUEST,
    status: REQUEST
  };
}
export function getTopNewsSuccess(topNewsData) {
  console.log("CallTWO");
  return {
    type: GET_NEWS_SUCCESS,
    status: SUCCESS,
    topNewsData
  };
}
export function getTopNewsFailure(error) {
  console.log("CallThree", error);
  return {
    type: GET_NEWS_FAILURE,
    status: ERROR,
    error
  };
}

export function getTopNews() {
  return async (dispatch, getState, api) => {
    dispatch(getTopNewsRequest());
    try {
      const result = await api.get();
      const resultJson = await result.json();
      console.log("RESULT", resultJson);
      dispatch(getTopNewsSuccess(resultJson.data));
    } catch (e) {
      dispatch(getTopNewsFailure(e.message));
    }
  };
}
