import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { menustyle } from './menustyle'
export const MenuItem=({id,title,image , onPress})=> {
  
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[menustyle.menuItems,menustyle.color3]}>
        <Image source={image} style={menustyle.menuItemImage} />
            <Text style={menustyle.menuItemTitle}>{title}</Text>

        </TouchableOpacity>
  )
}