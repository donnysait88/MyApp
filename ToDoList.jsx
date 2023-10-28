import React from 'react'
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';

const ToDoList = () => {
  return (
      <ScrollView> 
        <View style={{alignItems: 'center' }}>
          <Image source={require("./ape4.png")} style={[styles.image]}/>
        </View>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do Homework</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Review Assignment</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Go to Supermarket</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to Concert</Text>
          </View>
        </Pressable>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      completed: {
        backgroundColor: '#58D68D',
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
