import React, { useState } from "react";
import { View, Text, Dimensions, Image } from "react-native";
const { height, width } = Dimensions.get("window");
const Movie = ({ data }) => {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.1);

  return (
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
      <Image
        style={{
          width: "100%",
          height: 230,
        }}
        source={{
          uri: "http://image.tmdb.org/t/p/w500/" + data.poster_path,
        }}
      />
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
        <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
          {data.title}
        </Text>

        <Text numberOfLines={2}>{data.vote_average}/10</Text>
        <Text numberOfLines={2}>{data.overview}</Text>
      </View>
    </View>
  );
};

export default Movie;
