import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';

const ToDoList = ({ tasks }) => {


  return (
      <ScrollView> 
        <View style={{alignItems: 'center' }}>
          <Image source={require("./ape4.png")} style={[styles.image]}/>
        </View>
        <Pressable>
 
          {tasks.map((task) => (
            <View style={[styles.task, styles.incompleted]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))} 
          
        </Pressable>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
      },
      incompleted: {
        backgroundColor: '#F5B041',
      },
      taskText: {
        fontSize: 16,
      },
      image : {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        margin: 20,
      },
  });


export default ToDoList
