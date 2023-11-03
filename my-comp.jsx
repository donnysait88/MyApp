import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const MyComp = ({prop1, prop2, prop3}) => {

  // const {prop1, prop2, prop3} = props;
  let sum = prop2 + prop3;

  return (
    <View>
        <Text style={styles.textTitle}>This is a component</Text>
        <Text style={styles.textTitle}>{prop1}</Text>
        <Text style={styles.textTitle}>{prop2} plus {prop3} equal {sum}</Text>  
        {/* <MyCustomProp prop1={prop2} /> */}
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
