import { connect } from "react-redux";
import NewsList from "../screens/NewsList";
import { getTopNews } from "../actions/news.actions";

const mapStateToProps = state => {
  return {
    loading: state.topNews.loading,
    error: state.topNews.error,
    status: state.topNews.status,
    topNewsData: state.topNews.topNewsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopNews: () => {
      dispatch(getTopNews());
    }
  };
};

const NewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
export default NewsListContainer;
