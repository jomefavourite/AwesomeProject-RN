import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';

function PalettePreview({ palette, handlePress }) {
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View
            style={[
              {
                backgroundColor: item.hexCode,
              },
              styles.box,
            ]}
          ></View>
        )}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  box: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default PalettePreview;
