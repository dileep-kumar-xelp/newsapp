import { StyleSheet } from "react-native";
const NewsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    padding: 5
  },
  loaderText: {
    marginTop: 10,
    fontSize: 14,
    color: "black"
  }
});
export default NewsListStyles;
