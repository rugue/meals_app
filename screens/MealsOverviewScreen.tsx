// screens/MealsOverviewScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsOverviewScreen;
