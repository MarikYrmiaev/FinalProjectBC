import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import preparationTypes from "../data/preperationTypes";
import ingredientsTypes from "../data/ingredientsTypes";
import FormOption from "./FormOption";
import SearchBox from "./SearchBox";
import spicesTypes from "../data/spicesTypes";
import SearchPIS from "./SearchPIS";

const RecipeCreatePage = (props) => {
  const [recipe, setRecipe] = useState({
    preparation: "",
    ingredients: [],
    spices: [],
  });

  //this is the state that cares the current ingredient search, and the current spice search
  const [searchMap, setSearchMap] = useState({
    ingredient: "",
    spice: "",
  });

  //פה אנחנו בעצם מחזירים מערך חדש שמחזיק בתוכו רק את המצרכים שיוצגו בחיפוש. הדרך שאנחנו מפלטרים היא כזאת: אנחנו משתמשים בפונקצייה "פילטר" שמריצה את הפונקציה שהיא קיבלה בפרמטר עבור כל איבר במערך. כל פעם שהפונקציה מחזירה "טרו" - האיבר הזה ישאר במערך החדש שהפונקציה (פילטר) תחזיר, במידה והיא מחזירה "פולס" הוא לא ישאר.
  const filteredIngredients = ingredientsTypes.filter((currentIngredient) =>
    currentIngredient.includes(searchMap.ingredient)
  );

  const filteredSpices = spicesTypes.filter((currentSpice) =>
    currentSpice.includes(searchMap.spice)
  );

  // אחראי על בחירת אופן ההכנה
  const pickPreparationType = (type) => {
    setRecipe({
      ...recipe,
      preparation: type,
    });
  };
  // אחראי על בחירת המצרכים + שיהיה ניתן לבחור מוצר מסויים רק פעם אחת
  const pickIngredientsType = (type) => {
    //if the array already includes this type - dont add this type again
    if (recipe.ingredients.includes(type)) {
      return;
    }
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, type],
    });
  };
  // אחראי על הורדת מוצר שנבחר
  const removeIngredientsType = (type) => {
    setRecipe({
      ...recipe,
      ingredients: recipe.ingredients.filter(
        (currentIngredient) => type !== currentIngredient
      ),
    });
  };
  // אחראי על בחירת התבלינים + שיהיה ניתן לבחור מוצר מסויים רק פעם אחת
  const pickSpicesType = (type) => {
    if (recipe.spices.includes(type)) {
      return;
    }
    setRecipe({
      ...recipe,
      spices: [...recipe.spices, type],
    });
  };
  // אחראי על הורדת תבלין שנבחר
  const removeSpicesType = (type) => {
    setRecipe({
      ...recipe,
      spices: recipe.spices.filter((currentSpice) => type !== currentSpice),
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.preparationBox}>
        <View style={styles.boxHead}>
          <Text>Preparation</Text>
        </View>
        <View style={styles.optionsBox}>
          {preparationTypes.map((currentItem) => {
            return (
              <FormOption
                key={currentItem}
                optionValue={currentItem}
                onPress={() => pickPreparationType(currentItem)}
                isActive={recipe.preparation === currentItem}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.preparationBox}>
        <View style={styles.boxHead}>
          <Text>Ingredients</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {recipe.ingredients.map((currentIngredient) => (
              <ChosenOption
                optionValue={currentIngredient}
                onPressX={() => removeIngredientsType(currentIngredient)}
              />
            ))}
          </ScrollView>
        </View>
        <SearchPIS
          searchMap={searchMap}
          setSearchMap={setSearchMap}
          name={"ingredient"}
        />
        <View style={styles.optionsBox}>
          {filteredIngredients.map((currentItem) => {
            return (
              <FormOption
                key={currentItem}
                optionValue={currentItem}
                onPress={() => pickIngredientsType(currentItem)}
                isActive={recipe.ingredients.includes(currentItem)}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.preparationBox}>
        <View style={styles.boxHead}>
          <Text>Spices</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {recipe.spices.map((currentSpice) => (
              <ChosenOption
                optionValue={currentSpice}
                onPressX={() => removeSpicesType(currentSpice)}
              />
            ))}
          </ScrollView>
        </View>
        <SearchPIS
          searchMap={searchMap}
          setSearchMap={setSearchMap}
          name={"spice"}
        />
        <View style={styles.optionsBox}>
          {filteredSpices.map((currentItem) => {
            return (
              <FormOption
                key={currentItem}
                optionValue={currentItem}
                onPress={() => pickSpicesType(currentItem)}
                isActive={recipe.spices.includes(currentItem)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default RecipeCreatePage;

const styles = StyleSheet.create({
  main: { flex: 1, paddingHorizontal: 15, paddingVertical: 20 },
  preparationBox: {
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 15,
  },
  boxHead: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderTopWidth: 0,
    paddingHorizontal: 5,
  },
  optionsBox: {
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
});

function ChosenOption({ optionValue, onPressX }) {
  return (
    <View style={chosenOptionStyles.main}>
      <TouchableOpacity style={chosenOptionStyles.button} onPress={onPressX}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text>{optionValue}</Text>
    </View>
  );
}

const chosenOptionStyles = StyleSheet.create({
  main: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 7,
    paddingHorizontal: 5,
    marginRight: 2,
  },
  button: {
    marginRight: 10,
  },
});
