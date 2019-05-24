import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
export default class ListItem extends Component {
  onPress = () => {
    const { onPress } = this.props;
    onPress && onPress();
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onPress()}>
        <View style={styles.titleHolder}>
          <Text numberOfLines={3} ellipsizeMode={"tail"} style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.author}>{this.props.author}</Text>
        </View>
        <View style={styles.imageHolder}>
          <Image style={styles.image} source={{ uri: this.props.image }} />
        </View>
      </TouchableOpacity>
    );
  }
}
ListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func
};
