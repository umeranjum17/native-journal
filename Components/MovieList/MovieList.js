import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Movie from "../Movie";
import db from "../../db";
import Svg, { Rect } from "react-native-svg";
// import LinearGradient from "expo-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
const CustomSvg = Animated.createAnimatedComponent(Svg);
const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.72;
const BackDrop = ({ scrollX }) => {
  const ArrayOfMovies = db.results;

  return (
    <View style={{ ...StyleSheet.absoluteFillObject, height: height * 0.6 }}>
      <FlatList
        data={ArrayOfMovies}
        keyExtractor={(item) => "+" + item.id}
        renderItem={({ item, index }) => {
          const translateX = scrollX.interpolate({
            inputRange: [
              ((index - 1) * ITEM_SIZE) / 1.2,
              (index * ITEM_SIZE) / 1.2,
            ],
            outputRange: [-width, 0],
            extrapolate: "clamp",
          });
          return (
            <MaskedView
              style={{ ...StyleSheet.absoluteFillObject }}
              maskElement={
                <CustomSvg
                  height={height}
                  width={width}
                  viewBox={`0 0 ${width} ${height}`}
                  style={{ transform: [{ translateX }] }}
                >
                  <Rect
                    x="0"
                    y="0"
                    height={height}
                    width={width}
                    fill="red"
                  ></Rect>
                </CustomSvg>
              }
            >
              <Image
                style={{
                  height: height * 0.6,
                  width: "100%",
                  resizeMode: "cover",
                }}
                source={{
                  uri: "http://image.tmdb.org/t/p/w500/" + item.backdrop_path,
                }}
              ></Image>
            </MaskedView>
          );
        }}
      ></FlatList>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
          ...StyleSheet.absoluteFillObject,
          bottom: 0,
          width,
          height: height * 0.6,
        }}
      />
    </View>
  );
};
export default function MovieList({ navigation }) {
  const ArrayOfMovies = db.results;

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        data={ArrayOfMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        snapToInterval={ITEM_SIZE / 1.2}
        bounces={false}
        contentContainerStyle={{
          paddingLeft: ITEM_SIZE / 3 / 1.2,
          marginTop: height / 2,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          // //  console.log(index)
          const inputRange = [
            ((index - 1) * ITEM_SIZE) / 1.2,
            (index * ITEM_SIZE) / 1.2,
            ((index + 1) * ITEM_SIZE) / 1.2,
          ];

          const temp = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
            extrapolate: "clamp",

            // console.log(inputRange)
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1.5, 0.9],
            extrapolate: "clamp",

            // console.log(inputRange)
          });

          return (
            <Animated.View
              style={[
                {
                  marginHorizontal: 10,
                  height: height / 2,
                  width: (ITEM_SIZE - 20) / 1.2,
                  alignItems: "center",

                  transform: [{ translateY: temp }],
                },
              ]}
            >
              <Movie data={item} navigation={navigation} />
            </Animated.View>
          );
        }}
        keyExtractor={(item) => "" + item.id}
      ></Animated.FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
