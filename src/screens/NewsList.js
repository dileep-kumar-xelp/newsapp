import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "../styles/NewsListStyles";
import NewsListItem from "../components/ListItem";
import PropTypes from "prop-types";
export default class NewsList extends Component {
  componentDidMount() {
    this.props.getTopNews();
  }
  navigateTo = item => {
    const { navigate } = this.props.navigation;
    navigate("Details", { item });
  };
  renderItem = item => {
    return (
      <NewsListItem
        title={item.title}
        author={item.author}
        image={item.urlToImage}
        onPress={() => this.navigateTo(item)}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"blue"} />
          </View>
        )}
        {this.props.topNewsData &&
          this.props.topNewsData.articles.length > 0 && (
            <FlatList
              data={this.props.topNewsData.articles}
              contentContainerStyle={styles.list}
              keyExtractor={(item, index) => item.title}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItem(item)}
            />
          )}
      </View>
    );
  }
}
NewsList.propTypes = {
  newsData: PropTypes.array,
  getTopNews: PropTypes.func,
  topNewsData: PropTypes.object
};
