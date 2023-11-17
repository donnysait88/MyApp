import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
};

const AboutScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>App Name: PFK Do it!</Text>
          <Text style={styles.text}>Name: Paradon Meeanan</Text>
          <Text style={styles.text}>Today's Date: {currentDate}</Text>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 20,
    
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
    marginBottom: 10,
    color: 'white'
  }
  
  
});

export default AboutScreen;
