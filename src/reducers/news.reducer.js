import * as newsActions from "../actions/news.actions";

const topNews = (
  state = {
    loading: false,
    topNewsData: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case newsActions.GET_NEWS_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case newsActions.GET_NEWS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        topNewsData: action.topNewsData
      });
    }
    case newsActions.GET_NEWS_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    default:
      return state;
  }
};
export default topNews;
