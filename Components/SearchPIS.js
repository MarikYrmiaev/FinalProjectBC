import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Searchbar } from "react-native-paper";
import searchImg from "../assets/Images/Search.png";

const SearchPIS = ({ searchMap, setSearchMap, name }) => {
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        value={searchMap[name]}
        onChangeText={(text) =>
          setSearchMap({
            ...searchMap,
            [name]: text,
          })
        }
      />
      <Image source={searchImg} style={styles.image} />
    </View>
  );
};

export default SearchPIS;

const styles = StyleSheet.create({
  main: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    // width: 80,
    // height: 25,
  },
  input: {
    width: 80,
  },
  image: {
    width: 20,
    height: 20,
  },
});
