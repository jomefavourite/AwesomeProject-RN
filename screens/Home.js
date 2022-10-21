import React from 'react';
import { View, RefreshControl, FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTE = [
  { paletteName: 'Solarized', colors: COLORS },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchColorPalettes = React.useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchColorPalettes();
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1000);
    setRefreshing(false);
  }, []);

  React.useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default Home;
