import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList
} from 'react-native';
import MyComp from './my-comp';



const App = () => {

  const [inputText, setInputText] = useState('');

  let condition = false;
  let dynamicStyles = condition ? styles.textTitle : styles.textName;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {'id': n, 'text': `item${n}`};
    data.push(item)
  }

  const renderItem = ({...item}) => <Text>{item.text}</Text>

  const handlePress = () => {
    //some code..
  }

  const handleTextInput = (text) => {
    setInputText(text)
  }

  return (
    
        <View style={styles.container}>
            <Text style={styles.textTitle}>Hello World</Text>
            <Text style={dynamicStyles}>My name is Donny</Text>
            <MyComp />
            <Image source={require("./ape4.png")} style={styles.image}/>
            <TextInput style={styles.textInput} placeholder='Please enter you name' value={inputText} onChangeText={handleTextInput}/>
            <Button title='A Button' onPress={handlePress}/>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
      
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 20,
    margin: 5,
    alignItems: 'center',
  },
  textTitle : {
    fontSize: 20,
    fontWeight: '600',
    margin: 5,
    color: '#2236E1',
    // textAlign: 'center'
  },
  textName : {
    fontSize: 18,
    fontWeight: '400',
    color: '#DD3224',
    // textAlign: 'center'
  },
  image : {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  textInput : {
    borderWidth: 0.3,
    margin: 10,
  }

});

export default App;
