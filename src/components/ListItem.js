import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
export default class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.titleHolder}>
          <Text>Title</Text>
          <Text>SubTitle</Text>
        </View>
        <View style={styles.imageHolder} />
      </TouchableOpacity>
    );
  }
}
ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.string
};
