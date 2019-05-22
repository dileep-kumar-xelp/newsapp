import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/NewsListStyles";
import NewsListItem from "../components/ListItem";
import PropTypes from "prop-types";
const list = [
  "CameraSync",
  "Form",
  "CheckBox",
  "RadioButton",
  "MultiSelect",
  "GridView",
  "MultiSelectGridView",
  "Swiper",
  "ParallaxScrollView",
  "ScrollableHeader",
  "AvatarList",
  "StaggeredGrid",
  "CardStack",
  "HorizontalSliderDemo",
  "FloatLabelTextField",
  "ProgressBar",
  "TextWithSpace",
  "Header",
  "SnackBar",
  "FloatingMenu",
  "VerticalSwiper",
  "ButtonDemo"
];
export default class NewsList extends Component {
  componentDidMount() {
    this.props.getTopNews();
  }
  navigateTo = item => {
    const { navigate } = this.props.navigation;
  };
  renderItem = item => {
    return <NewsListItem title={"HEADER"} subTitle={"Subtitle"} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          contentContainerStyle={styles.list}
          keyExtractor={(item, index) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}
NewsList.propTypes = {
  newsData: PropTypes.array,
  getTopNews: PropTypes.func
};
