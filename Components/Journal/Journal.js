import React, { useState } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
const { height, width } = Dimensions.get("window")
const Journal = () => {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);

    return (
        <View style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginHorizontal:40,
            shadowOffset: {
                width: shadowOffsetWidth,
                height: -shadowOffsetHeight,
            },
            height: 300,
            width:width*0.61,
            shadowOpacity,
            shadowRadius,
            borderColor:"#ccc",
            borderWidth:1,
            padding:1,
        }}>
            <Image
            style={{width:width*0.61, height: 240}}  source={{
                uri: "https://via.placeholder.com/400"
            }} />
            <Text style={{height:50,marginTop:10}}>This is am checkingn only</Text>
        </View>
    )
}

export default Journal
