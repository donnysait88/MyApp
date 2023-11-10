import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

const MyComp = ({handlePress}) => {

  // const {prop1, prop2, prop3} = props;
  // let sum = prop2 + prop3;

  function TestFunc () {
    //additional processing
    handlePress();
  }

  return (
    <View>
        <Text style={styles.textTitle}>This is a component</Text>
        <Button title="component Button" onPress={handlePress} />
        {/* <Text style={styles.textTitle}>{prop1}</Text>
        <Text style={styles.textTitle}>{prop2} plus {prop3} equal {sum}</Text>   */}
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
