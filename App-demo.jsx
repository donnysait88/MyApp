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
  FlatList,
  Modal
} from 'react-native';
import MyComp from './my-comp';



const App = () => {

  const [inputText, setInputText] = useState('Text Here');
  const [number, setNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false)


  let condition = false;
  let dynamicStyles = condition ? styles.textTitle : styles.textName;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {'id': n, 'text': `item${n}`};
    data.push(item)
  }

  const renderItem = ({item}) => <Text style={styles.listText}>{item.text}</Text>

  const propData = {
    prop1: inputText,
    prop2: 12,
    prop3: 13,
  }

  const handlePress = () => {
    //some code..
  }

  const handleTextInput = (text) => {
    setInputText(text)
  }

  const handleNumber = (nums) => {
    setNumber(nums)
  }

  return (
    
        <SafeAreaView style={styles.container}>
            <Text style={styles.textTitle}>Hello World</Text>
            <Text style={dynamicStyles}>My name is Donny</Text>
            <MyComp 
             {...propData}
            />
            <Image source={require("./ape4.png")} style={styles.image}/>
            <TextInput 
              style={styles.textInput} 
              placeholder='Please enter your name' 
              value={inputText} 
              onChangeText={handleTextInput}
            />
            <TextInput 
              style={styles.numInput} 
              placeholder='Please enter your passcode' 
              value={number} 
              onChangeText={handleNumber}
              keyboardType="numeric"
              secureTextEntry={true}
            />
      
            <Modal visible={modalVisible} animationType="fade">
              <View>
                <Text style={styles.textRed}>This is a modal!</Text>
                <Button title="Close Modal" onPress={()=> setModalVisible(false)} />
              </View>
            </Modal>


            <Button title="Open Modal" onPress={()=> setModalVisible(true)}/>
            <FlatList data={data} renderItem={renderItem}/>
        </SafeAreaView>
      
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
    width: "50%",
    padding: 10,
    
  },
  numInput : {
    borderWidth: 0.3,
    margin: 10,
    padding: 10,
    width: "50%"
  },
  listText: {
    fontSize: 20,
    color: "red",
    margin: 10,
  }

});

export default App;
