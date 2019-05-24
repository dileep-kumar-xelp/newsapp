import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/NewsDetailsStyles";

import PropTypes from "prop-types";

export default class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ data: params.item || {} });
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image} source={{ uri: data.urlToImage }} />
        <Text>{data.content}</Text>
      </View>
    );
  }
}
