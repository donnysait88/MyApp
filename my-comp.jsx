import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const MyComp = () => {
  return (
    <View>
        <Text style={styles.textTitle}>This is a component</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    textTitle: {
        color: '#f2c80f',
        margin: 5,
        fontSize: 24,
        fontWeight: '600',
    }
})

export default MyComp;
