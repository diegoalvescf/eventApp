import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Home } from './src/presentation/jsx/screens/home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
