import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLOR } from "../constants/color";
import { SIZE } from "../constants/size";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  isLiked: boolean;
  onPressLiked: () => void;
  onPressBottomSheet: () => void;
  text: String;
  image: ImageSourcePropType;
};

const Card = ({
  isLiked,
  onPressLiked,
  onPressBottomSheet,
  text,
  image,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.favoris} onPress={onPressLiked}>
            {isLiked ? (
              <Image
                style={styles.icon}
                source={require("../assets/icon/heart.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../assets/icon/heart-stroke.png")}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.onPressMiddle}
          onPress={onPressBottomSheet}
        />

        <View style={styles.bottom}>
          <LinearGradient
            colors={[
              "transparent",
              // COLOR.secondary
              "transparent",
            ]}
            style={styles.gradient}
          >
            <Text style={styles.text}>{text}</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 300,
    backgroundColor: COLOR.light,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    //  margin: 10,
    marginRight: SIZE.SPACING / 2,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  bottom: {
    width: "100%",
    height: SIZE.SPACING2 * 1.5,
    justifyContent: "center",
  },
  top: {
    width: "100%",
    height: SIZE.SPACING2 * 1.5,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: SIZE.SPACING / 1.2,
    fontWeight: "bold",
    color: COLOR.white,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // alignItems: 'center',
    paddingHorizontal: SIZE.SPACING,
  },
  onPressMiddle: {
    height: SIZE.SPACING5 * 1.8,
    width: SIZE.screenWidth,
    // backgroundColor: 'orange'
  },
  icon: {
    height: 25,
    width: 29,
  },
  favoris: {
    width: 50,
    height: 50,
    borderRadius: SIZE.SPACING4,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
});
