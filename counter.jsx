import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Counter = ({currentCount, handleIncrementCounter}) => {
  return (
    <View>
      <Text style={styles.btnText}>Current Count: {currentCount}</Text>
      <Pressable
        onPress={ () => handleIncrementCounter(false)}
        onLongPress={ () => handleIncrementCounter(true)}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'yellow' : null},
          styles.btnStyles,
        ]}>
        <Text style={styles.btnText}>Increment Counter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    // backgroundColor: 'white',
  },
  btnText: {
    margin: 10,
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default Counter;
