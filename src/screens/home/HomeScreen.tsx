import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Category from "../../components/Category";
import TopCards from "../../components/TopCards";
import BestUser from "../../components/BestUser";
import { COLOR } from "../../constants/color";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <Category />
      <SafeAreaView>
        <ScrollView>
          <TopCards />
          <BestUser />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.primary,
  },
});
