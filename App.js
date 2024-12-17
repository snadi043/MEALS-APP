import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3f2f25'},
                cardStyle: {backgroundColor: "#24180f",}
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
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {},
});
