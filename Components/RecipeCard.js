import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfileImage from "./ProfileImage";
import heartImg from "../assets/Images/Heart-icon.png";

const RecipeCard = ({ recipe }) => {
  return (
    <View style={styles.main}>
      <View style={styles.profileSection}>
        <View style={styles.firstProfileBox}>
          <ProfileImage url={recipe.user.profileImage} />
          <Text>{recipe.user.fullName}</Text>
        </View>
        <View style={styles.secondProfileBox}>
          <Text>One Hour Ago</Text>
        </View>
      </View>
      <View style={styles.recipeDescriptionBox}>
        <Text numberOfLines={3} style={styles.recipeDescriptionText}>
          {recipe.description}
        </Text>
      </View>
      <View style={styles.buttonsBar}>
        <TouchableOpacity style={styles.buttonInButtonBar}>
          <Text>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInButtonBar}>
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInButtonBar}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInButtonBar}>
          <Image style={styles.heartImg} source={heartImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 30,
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  firstProfileBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  recipeDescriptionBox: {
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 30,
    marginBottom: 10,
  },
  recipeDescriptionText: {},
  buttonsBar: {
    alignSelf: "center",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    overflow: "hidden",
  },
  buttonInButtonBar: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRightColor: "black",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heartImg: {
    width: 25,
    height: 25,
  },
});

export default RecipeCard;
