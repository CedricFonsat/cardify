import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/color'
import { SIZE } from '../constants/size'
import { Users } from '../data/data.fake'
import TextStroke from './TextStroke'

type Props = {}

const BestUser = (props: Props) => {

    const myText = '1'

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
        {Users.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={{
                width: SIZE.screenWidth / 4,
                height: SIZE.screenWidth / 4,
                marginRight: SIZE.SPACING / 2
              }}>
                <View style={styles.strokeText}>
                   <TextStroke text={`${index+1}`} style={{ fontSize: 70, color: COLOR.primary}}/>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={item.image}/>
                </View>
              </TouchableOpacity>
            );
  
        })}

        </ScrollView> 
    </SafeAreaView>
  )
}

export default BestUser

const styles = StyleSheet.create({
    container:{
        height: SIZE.SPACING5,
        paddingHorizontal: SIZE.SPACING2,
    },
    text:{
        color: COLOR.white,
        fontSize: SIZE.SPACING,
        fontWeight: "bold",
      },
      image:{
        width:"100%",
        height: "100%",
        resizeMode: "cover",
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
      },
      item:{
        width: SIZE.screenWidth / 4.5,
        height: SIZE.screenWidth / 4.5,
        backgroundColor: 'white',
        borderRadius: SIZE.SPACING5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      strokeText:{
        position: 'absolute',
        bottom: -5,
        left: -20
      }
     
})