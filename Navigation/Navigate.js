import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/Login";
import Register from "../Components/Register";
import HomePage from "../Components/HomePage";
import BchefRotation from "../Animation/BchefRotation";
import EditProfile from "../Components/EditProfile";
import Picture from "../Components/Picture";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecipeCreatePage from "../Components/RecipeCreatePage";

const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  setTimeout(async () => {
    // let UserId = await AsyncStorage.getItem('UserID')
    // // UserId = parseInt(UserId)
    // if(UserId != undefined && UserId != null){
    //     navigation.replace('HomePage');
    // }
    // else{
    // navigation.replace('Login');
    // }
    navigation.replace("Login");
  }, 3000);
  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      {/* <Text style={{marginTop:10,fontSize:50,fontFamily:'DEBBY'}}>FingerFly</Text> */}
      <BchefRotation />
    </View>
  );
}

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            <Stack.Screen
              name="splash_Screen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
          }

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register", //Set Header Title
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Picture"
            component={Picture}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="RecipeCreatePage"
            component={RecipeCreatePage}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: -50,
    marginTop: -20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
