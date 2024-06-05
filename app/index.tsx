// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
