import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  currentPrice: {
    color: "white",
    fontSize: 35,
    fontWeight: "800",
    letterSpacing: 1,
  },
  imageContainer: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 60,
    marginLeft: 10,
  },
  name: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    marginLeft: 25,
  },
  priceContainer: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2B2B2B",
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginBottom: 20,
  },
  candleStickText: {
    color: "white",
    fontWeight: "700",
  },
  candleStickDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 20,
  },
  candleStickTextLabel: {
    color: "grey",
    fontSize: 13,
  },
});

export default styles;
