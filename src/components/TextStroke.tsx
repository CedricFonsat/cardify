import { ColorValue, StyleSheet, StyleSheetProperties, Text, View } from 'react-native'
import React from 'react'

type Props = {
    text: String;
    style: Object;
}

const TextStroke = ({ text, style }: Props) => {
  return (
    <View>
          <Text style={[styles.paragraph, style]}>{text}</Text>
          <Text style={[styles.paragraph, styles.abs, style, {textShadowOffset: {width: -1, height: -1}}]}>{text}</Text> 
          <Text style={[styles.paragraph, styles.abs, style, {textShadowOffset: {width: -1, height: 1}}]}>{text}</Text>
          <Text style={[styles.paragraph, styles.abs, style, {textShadowOffset: {width: 1, height: -1}}]}>{text}</Text> 
        </View>
  )
}

export default TextStroke

const styles = StyleSheet.create({
    paragraph: {
      //  fontSize: 50,
      //  color: '#FFF',
        textShadowColor: 'white',
        textShadowRadius: 1,
        textShadowOffset: { 
          width: 1,
          height: 1,
        },
      }, 
      abs: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
})