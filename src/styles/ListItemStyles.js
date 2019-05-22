import { StyleSheet } from "react-native";
const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 3
  },
  titleHolder: {
    flex: 0.7
  },
  imageHolder: {
    flex: 0.3
  }
});
export default ListItemStyles;
