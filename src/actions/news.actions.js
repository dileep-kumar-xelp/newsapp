import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export function getTopNewsRequest() {
  return {
    type: GET_NEWS_REQUEST,
    status: REQUEST
  };
}
export function getTopNewsSuccess(topNewsData) {
  return {
    type: GET_NEWS_SUCCESS,
    status: SUCCESS,
    topNewsData
  };
}
export function getTopNewsFailure(error) {
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
      dispatch(getTopNewsSuccess(resultJson));
    } catch (e) {
      dispatch(getTopNewsFailure(e.message));
    }
  };
}
