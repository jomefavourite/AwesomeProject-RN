import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import ColorBox from '../components/ColorBox';
// import GlobalStyles from '../GlobalStyles';

const ColorPalette = ({ route, navigation }) => {
  const { paletteName, colors } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
