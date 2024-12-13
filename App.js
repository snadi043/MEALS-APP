import { StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View>
      <StatusBar style='light'/>
      <CategoryScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
