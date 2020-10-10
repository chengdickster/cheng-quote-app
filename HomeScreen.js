import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(navigation);

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Button
        title="Inspire Me!"
        onPress={() => {
          navigation.navigate('Quote of the day');
        }}
      />

      <Button
        title="Favorite Quotes"
        onPress={() => {
          navigation.navigate('Favorite');
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
