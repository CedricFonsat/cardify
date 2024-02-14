import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLOR } from "../../constants/color";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { SIZE } from "../../constants/size";

type Props = {};

const ProfileScreen = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("collection");

  // const handleCategoryPress = (index: any) => {
  //   setSelectedCategory(index);
  // };

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          height: SIZE.SPACING5 * 3,
          width: SIZE.screenWidth,
          backgroundColor: "blue",
          // backgroundColor: COLOR.light,
        }}
      >
        <LinearGradient
          colors={["transparent", COLOR.primary]}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
          }}
        />
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
          source={require("../../assets/background/background.jpeg")}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: SIZE.SPACING5 * 1.2,
              height: SIZE.SPACING5 * 1.2,
              borderRadius: SIZE.SPACING5 * 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              marginBottom: SIZE.SPACING / 1.5,
              overflow: "hidden",
            }}
          >
            <LinearGradient
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              colors={[
                "rgba(255,255,255,0.3)",
                "transparent",
                "transparent",
                "transparent",
              ]}
            >
              <View
                style={{
                  width: SIZE.SPACING4 * 1.15,
                  height: SIZE.SPACING4 * 1.15,
                  borderRadius: SIZE.SPACING5 * 2,
                  backgroundColor: "orange",
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  }}
                  source={require("../../assets/users/user.png")}
                />
              </View>
            </LinearGradient>
          </View>
          <Text
            style={{
              fontSize: SIZE.SPACING * 1.5,
              fontWeight: "bold",
              color: COLOR.white,
            }}
          >
            soymoi
          </Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZE.SPACING,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: COLOR.white,
          }}
        >
          Hello my name is boss mwaka
        </Text>
      </View>

      <View
        style={{
          width: SIZE.screenWidth,
          height: SIZE.SPACING3,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderBottomWidth: 2,
          borderColor: COLOR.light,
        }}
      >
        <TouchableOpacity
          onPress={() => setSelectedCategory("collection")}
          style={[
            styles.select,
            {
              borderRightWidth: 2,
              borderColor: COLOR.light,
            },
          ]}
        >
          <Text
            style={
              (selectedCategory === "collection" && styles.isSelected) ||
              styles.text
            }
          >
            Collection
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedCategory("favoris")}
          style={styles.select}
        >
          <Text
            style={
              (selectedCategory === "favoris" && styles.isSelected) ||
              styles.text
            }
          >
            Favoris
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedCategory("create")}
          style={[
            styles.select,
            {
              borderLeftWidth: 2,
              borderColor: COLOR.light,
            },
          ]}
        >
          <Text
            style={
              (selectedCategory === "create" && styles.isSelected) ||
              styles.text
            }
          >
            Créer
          </Text>
        </TouchableOpacity>
      </View>

      {selectedCategory === "create" && (
        <View
          style={{
            width: SIZE.screenWidth,
            height: SIZE.screenWidth,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Create</Text>
        </View>
      )}

      {selectedCategory === "favoris" && (
        <View
          style={{
            width: SIZE.screenWidth,
            height: SIZE.screenWidth,
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Favoris</Text>
        </View>
      )}

      {selectedCategory === "collection" && (
        <View
          style={{
            width: SIZE.screenWidth,
            height: SIZE.screenWidth,
            backgroundColor: "purple",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Collection</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: COLOR.primary,
  },
  select: {
    width: SIZE.screenWidth / 3.1,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    //  backgroundColor: COLOR.tertiary,
  },
  text: {
    color: COLOR.white,
    fontWeight: "bold",
  },
  isSelected: { color: COLOR.blue, fontWeight: "bold" },
});
