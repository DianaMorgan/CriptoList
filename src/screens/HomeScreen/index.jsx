import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const coinsData = await getMarketData();
    setCoins(coinsData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <View style={styles.homeScreen}>
        <Text style={styles.title}>Crypto</Text>
        <TextInput
          style={styles.search}
          placeholderTextColor="#858585"
          placeholder="Search a coin"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>
      <FlatList
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    marginBottom: 5,
  },
  search: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginRight: 10,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontFamily: "DroidSans",
    color: "white",
    fontSize: 25,
    letterSpacing: 1,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
