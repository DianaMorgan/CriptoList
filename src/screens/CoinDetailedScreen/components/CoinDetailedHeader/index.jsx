import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const CoinDetailedHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CoinDetailedHeader;
