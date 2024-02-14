import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SIZE } from "../constants/size";
import { Cards } from "../data/data.fake";
import { COLOR } from "../constants/color";
import Card from "./Card";

type Props = {};

const TopCards = (props: Props) => {

    const [likeCard, setLikeCard] = useState<number | null>(null);
    const [tabLikes, setTabLikes] = useState<number[]>([]);

    const handleCardPress = (index: number) => {
        if (!tabLikes.includes(index)) {
            setLikeCard(index);
            setTabLikes(prevTabLikes => [...prevTabLikes, index]);
        }else if (tabLikes.includes(index)) {
           const newTab = tabLikes.filter(item => item !== index);
           setTabLikes(newTab);
            console.log('noob', index);
            
        }
    };

    if (tabLikes.length !== 0) {
        console.log(tabLikes, 'test');
    }

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.text}>Top 5 Cartes NFT</Text>
        <TouchableOpacity>
            <Text style={styles.anymore}>Voir plus</Text>
        </TouchableOpacity>
        </View>  
      <ScrollView 
      horizontal
      style={styles.container}>
        {Cards.map((item, index) => {
          return (
            <View key={index}>
              <Card 
              text={item.name} 
              image={item.image}
              onPressBottomSheet={() => console.log('bottomSheet', index)} 
              onPressLiked={() => handleCardPress(index)} 
              isLiked={tabLikes.includes(index)} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopCards;

const styles = StyleSheet.create({
  container: {
    width: SIZE.screenWidth,
    height: SIZE.screenWidth / 1.2,
    backgroundColor: COLOR.primary,
    paddingHorizontal: SIZE.SPACING,
    rowGap: 10
  },
  text:{
    color: COLOR.white,
    fontSize: SIZE.SPACING,
    fontWeight: "bold",
  },
  content:{
    width: SIZE.screenWidth,
    height: SIZE.SPACING3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZE.SPACING
  },
  anymore:{
    color: COLOR.blue,
    fontSize: SIZE.SPACING,
    fontWeight: "bold",
  }
});
