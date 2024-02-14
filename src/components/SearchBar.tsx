import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { Search } from 'lucide-react-native'
import { COLOR } from '../constants/color'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Search color={COLOR.gray} />
      </View>
      <TextInput placeholder='Rechercher votre nft' placeholderTextColor={COLOR.gray} style={styles.textinput}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        width: SIZE.screenWidth * 0.78,
        height: SIZE.SPACING3,
        backgroundColor: COLOR.tertiary,
        borderRadius: SIZE.SPACING3,
        flexDirection: 'row',
        justifyContent:'center',
    },
    textinput:{
        width: '80%',
        height: '100%',
        color: COLOR.gray,
    },
    icon:{
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})