import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBox from "./SearchBox";
import demoRecips from "../demoData/demoRecipes";
import RecipeCard from "./RecipeCard";

const HomePage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Button
        title="To Create"
        onPress={() => navigation.push("RecipeCreatePage")}
      />
      <SearchBox />
      <View>
        {demoRecips.map((currentRecipe) => (
          <RecipeCard recipe={currentRecipe} />
        ))}
      </View>
      {/* <TouchableOpacity  
            onPress={() => props.navigation.navigate('EditProfile')}>
            <Text>Edit Profile</Text>
         </TouchableOpacity> */}
    </View>
  );
};
export default HomePage;
