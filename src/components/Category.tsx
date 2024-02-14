import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SIZE } from "../constants/size";
import { COLOR } from "../constants/color";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const Categories = [
  {
    id: 1,
    name: "Category 1",
    logo: require("../assets/categories/Rocket.png"),
  },
  {
    id: 2,
    name: "Category 2",
    logo: require("../assets/categories/Heart.png"),
  },
  {
    id: 3,
    name: "Category 3",
    logo: require("../assets/categories/Hundred.png"),
  },
  {
    id: 4,
    name: "Category 1",
    logo: require("../assets/categories/DVD.png"),
  },
  {
    id: 5,
    name: "Category 1",
    logo: require("../assets/categories/Beaming.png"),
  },
];

const Category = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (index: any) => {
    setSelectedCategory(index);
  };

  // gradient pink and gray or light

  return (
    <View style={styles.container}>
      {Categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item]}
          onPress={() => handleCategoryPress(index)}
        >
          {selectedCategory === index && (
            <LinearGradient
              colors={["transparent", COLOR.secondary]}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <View style={styles.itemContent}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={category.logo}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: SIZE.screenWidth,
    height: SIZE.SPACING5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: SIZE.SPACING / 2,
  },
  item: {
    width: SIZE.screenWidth / 6,
    height: SIZE.screenWidth / 6,
    backgroundColor: COLOR.tertiary,
    borderRadius: SIZE.SPACING3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  itemContent: {
    width: SIZE.screenWidth / 7,
    height: SIZE.screenWidth / 7,
    backgroundColor: COLOR.light,
    borderRadius: SIZE.SPACING3,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor:
      "linear-gradient(214deg, rgba(240,104,118,0) 0%, rgba(232,14,203,1) 74%);",
  },
});
