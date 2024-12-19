import './gesture-handler.native';

import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

import FavoriteContextProvider from './store/context/favorite-context';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
  return (
    <Drawer.Navigator screenOptions={
      {
        drawerActiveBackgroundColor: '#24180f',
        drawerActiveTintColor: '#e2b497',
        drawerInactiveTintColor: '#CECECE',
        drawerLabelStyle: {fontSize: 20, fontWeight: 350},
        drawerStyle: {backgroundColor: '#4f2f25'},
        headerStyle: {backgroundColor: '#351401'},
        sceneStyle: {backgroundColor: '#3f2f25'},
        headerTintColor: 'white',
      }
    }>
      <Drawer.Screen 
        name="Categories" 
        component={CategoryScreen} 
        options={
          {
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons name="fast-food" color={color} size={size}/>
          }
          }/>
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={
          {drawerIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size}/>}
          }/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
  <>
    <StatusBar style='light'/>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                cardStyle: {backgroundColor: "#24180f",}
                // contentStyle: {backgroundColor: '#3f2f25'},
                // headerBackTitle: 'Back',  
                // default option to display it as "Back", but now it is the previous screen title.// 
                }}>
            <Stack.Screen 
              name="All Categories" 
              component={MyDrawer}
              options = {{
                headerShown: false 
                }
              }
              />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen}
              />
            <Stack.Screen 
              name="MealDetails" 
              component={MealDetailsScreen}
              options= {{title: 'About the Meal'}} 
              />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
