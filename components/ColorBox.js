import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ColorBox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode,
    color: '#fff',
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  boxText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ColorBox;
