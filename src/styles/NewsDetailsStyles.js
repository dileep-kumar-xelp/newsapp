import { StyleSheet } from "react-native";
import { IMAGE_BACKGROUND } from "../utils/constants";
const NewsDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15
  },
  title: {
    fontSize: 16,
    color: "#555"
  },
  image: {
    width: "100%",
    height: 250,
    marginVertical: 20,
    backgroundColor: IMAGE_BACKGROUND
  }
});
export default NewsDetailsStyles;
