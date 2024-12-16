import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3f2f25'},
                // headerBackTitle: 'Back',  
                // default option to display it as "Back", but now it is the previous screen title.// 
                }}>
            <Stack.Screen 
              name="MealsCategories" 
              component={CategoryScreen}
              options = {{
                title: 'Categories',
                }
              }
              />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {},
});
