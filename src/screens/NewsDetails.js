import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/NewsDetailsStyles";
import moment from "moment";
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
        <View style={styles.authorAndDateHolder}>
          <Text style={styles.author}>{data.author}</Text>
          <Text style={styles.publishedAt}>
            {moment(data.publishedAt).format("MM/DD/YYYY")}
          </Text>
        </View>
        <Image style={styles.image} source={{ uri: data.urlToImage }} />
        <Text>{data.content}</Text>
      </View>
    );
  }
}
