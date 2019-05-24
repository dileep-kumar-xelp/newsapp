import { StyleSheet } from "react-native";
import { IMAGE_BACKGROUND } from "../utils/constants";
const ListItemStyles = StyleSheet.create({
  container: {
    height: 110,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 3
  },
  titleHolder: {
    flex: 1,
    marginRight: 10
  },
  title: {
    fontSize: 14,
    color: "#555"
  },
  author: {
    fontSize: 12,
    marginTop: 10
  },
  imageHolder: {
    width: 85,
    height: 85,
    backgroundColor: IMAGE_BACKGROUND
  },
  image: { width: "100%", height: "100%" }
});
export default ListItemStyles;
