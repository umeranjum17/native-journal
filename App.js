import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, FlatList, Dimensions } from 'react-native';
import Journal from './Components/Journal';

const { width, height } = Dimensions.get('window')
export default function App() {
  const ArrayOfNotes = [
    {
      name: "Note1",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Note5",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Note9",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Note551",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Not55e1",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "No5555te1",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Not55555e1",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Note2",
      value: "this is one not that i am checking if it's working or not"
    },
    {
      name: "Note3",
      value: "this is one not that i am checking if it's working or not"
    }]
  const ITEM_SIZE = width * 0.72;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0.4,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    // fadeOut();
    // fadeIn()
  }, [])

  return (
    <View style={styles.container}
    >
      <Animated.FlatList
        data={ArrayOfNotes}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={ITEM_SIZE*1.1}
        bounces={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingLeft: ITEM_SIZE
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        renderItem={({ item, index }) => {
          // //  console.log(index)
          const inputRange = [(index) * ITEM_SIZE, (index + 1) * ITEM_SIZE, (index + 2) * ITEM_SIZE]

          const temp = scrollX.interpolate({
            inputRange,
            outputRange: [0, -100, 0],

            // console.log(inputRange)
          })
          return (<Animated.View style={[{

           
            alignItems: 'center',
            marginHorizontal: 20,
            padding:40,
            width: ITEM_SIZE - 40,
            
            // opacity: fadeAnim,
            transform: [{ translateY: temp }]
          }]}>
           <Journal/>
          </Animated.View>)
        }}
        keyExtractor={(item) => item.name}
      >

      </Animated.FlatList></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
