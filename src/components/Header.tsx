import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { ChevronLeft, Edit } from 'lucide-react-native';
import { COLOR } from '../constants/color';

type Props = {
    leftIcon?: React.JSX.Element; 
    middle?: React.JSX.Element; 
    rightIcon?: React.JSX.Element; 
}

const Header = ({ leftIcon, middle, rightIcon }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {leftIcon || <ChevronLeft color={COLOR.white} size={30}/>}
      </TouchableOpacity>
       {middle || null}
      <TouchableOpacity style={styles.button}>
        {rightIcon || <Edit color={COLOR.white} size={30}/>}
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: SIZE.SPACING5 * 1.2,
        width: SIZE.screenWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: SIZE.SPACING,
        position: "absolute",
        zIndex: 99
    },
    button:{
        width: SIZE.SPACING3,
        height: SIZE.SPACING3,
        borderRadius: SIZE.SPACING3,
        backgroundColor: 'rgba(255, 255, 255, .1)',
        justifyContent: "center",
        alignItems: "center",
    }
})