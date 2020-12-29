import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { SharedElement } from "react-native-shared-element";
const { width, height } = Dimensions.get("window");
const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <SharedElement id={item.id + "image"}>
        <Image
          style={{ height, width, resizeMode: "cover" }}
          source={{
            uri: "http://image.tmdb.org/t/p/w500/" + item.poster_path,
          }}
        />
      </SharedElement>
      <SharedElement id={(item.title = "title")}>
        <Text numberOfLines={1} style={{ fontWeight: "bold", color: "white" }}>
          {item.title}
        </Text>
      </SharedElement>
    </View>
  );
};
Details.sharedElements = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return [
    {
      id: item.id + "image",
    },
    {
      id: item.id + "title",
    },
  ];
};
export default Details;

const styles = StyleSheet.create({});
