import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import demoUsers from "../demoData/demoUsers";

const SearchBox = (props) => {
  const [currSearch, setCurrSearch] = useState("");
  const [nonChangable, setNonChangable] = useState("");

  const filteredUsers = demoUsers.filter((currItem) => {
    return currItem.name.includes(currSearch);
  });

  //   const filteredIngredients = ingredientsTypes.filter((currItem) => {
  //     return currItem.ingredientsTypes.includes(currSearch);
  //   });

  // useEffect(()=>{
  //     //we will execute a search in the users
  // }, [currSearch])

  return (
    <View style={{ borderColor: "black", borderWidth: 2 }}>
      <TextInput
        value={currSearch}
        onChangeText={(text) => setCurrSearch(text)}
      />
      <Text>{JSON.stringify(filteredUsers)}</Text>
    </View>
  );
};

export default SearchBox;
