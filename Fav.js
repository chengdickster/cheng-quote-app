import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';




const Fav = () => {

  return (
    <View>
      <Text style={styles.font}> “The secret of getting ahead is getting started.” – Mark Twain </Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
    font: {
        fontSize: 24
    }
});

export default Fav;