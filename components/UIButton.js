import {
    TouchableOpacity,
    Text,
} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

function UIButton(props) {
    const { onPress, title, isSelected } = props
    return <TouchableOpacity
        onPress={(onPress)}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 50,
            borderRadius: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? '#171717' : null,
        }} >
        {isSelected == true && <Icon
            size={20}
            name={"check-circle"} style={{
                color: 'green',
                position: 'absolute',
                top: 14,
                left: 15,
            }}></Icon>}
        <Text style={{
            color: 'white'
        }}>{title}</Text>
    </TouchableOpacity>
}
export default UIButton