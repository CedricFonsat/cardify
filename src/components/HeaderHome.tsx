import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { SIZE } from "../constants/size";
import { COLOR } from "../constants/color";
import { Filter } from "lucide-react-native";

type Props = {};

// add around profile user name and  wallet and notif app intern

const HeaderHome = (props: Props) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Pressable onPress={() => console.log("gggggg")} style={styles.filter}>
        <Filter color={COLOR.gray} />
      </Pressable>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    width: SIZE.screenWidth,
    height: SIZE.SPACING5 * 1.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: SIZE.SPACING / 2,
  },
  filter: {
    width: SIZE.SPACING3,
    height: SIZE.SPACING3,
    borderRadius: SIZE.SPACING4,
    backgroundColor: COLOR.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
});
