import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TextInput, Button, Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Register from '../Components/Register';
import Bchef from '../assets/Images/Bchef.png'

const Stack = createStackNavigator();

const  Navbar=()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerBackImage: () => (
                <AntDesign name="close" size={30} style={{ color: 'white' }} />
              ),
              headerTitle: () => (
                <View>
                     <Image source={Bchef} style={{width:60,height:60}}/>
                </View>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {/* I WANT TO SHOW THE MENU HERE */ }}
                  style={{ marginHorizontal: 20 }}
                >
                  <MaterialCommunityIcons name="earth" size={30} style={{ color: 'white' }} />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#da70d6',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}     
export default Navbar;