// screens/CategoriesScreen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES, Category } from "../data/categories";

interface CategoriesScreenProps {
  navigation: any; // Add navigation prop type
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  // Define the renderItem function
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MealsOverview", { categoryId: item.id })
      }
    >
      <View style={{ backgroundColor: item.color, padding: 20, margin: 10 }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
