import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorPaletteModal from './screens/ColorPaletteModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => ({ title: route.params.paletteName })}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="ColorPaletteModal"
            component={ColorPaletteModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
