import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 15,
    alignSelf: "center",
  },
  text: {
    color: "white",
    marginRight: 8,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
