import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { SharedElement } from "react-native-shared-element";
const { height, width } = Dimensions.get("window");
const Movie = ({ data, navigation }) => {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.1);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("details", { item: data });
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 40,
          shadowOffset: {
            width: shadowOffsetWidth,
            height: -shadowOffsetHeight,
          },
          height: 300,
          width: (width * 0.72 - 20) / 1.2,

          shadowOpacity,
          shadowRadius,

          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 13,
          padding: 1,
        }}
      >
        <SharedElement id={data.id + "image"}>
          <Image
            style={{
              width: (width * 0.72 - 20) / 1.2,
              height: 230,
              resizeMode: "cover",
            }}
            source={{
              uri: "http://image.tmdb.org/t/p/w500/" + data.poster_path,
            }}
          />
        </SharedElement>
        <View
          style={{
            height: 200,
            marginTop: 10,
            paddingHorizontal: 10,
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <SharedElement id={(data.title = "title")}>
            <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
              {data.title}
            </Text>
          </SharedElement>

          <Text numberOfLines={2}>{data.vote_average}/10</Text>
          <Text numberOfLines={2}>{data.overview}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
