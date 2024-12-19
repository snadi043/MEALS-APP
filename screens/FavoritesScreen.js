import {View, Text, StyleSheet} from 'react-native';
import { useContext } from 'react';
import {FavoriteContext} from '../store/context/favorite-context';
import { MEALS } from '../data/dummy_data';
import MealList from '../components/MealList/MealList';

function FavoritesScreen(){

    const favoriteMealsCtx = useContext(FavoriteContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.text}>You don't have favorite meals yet...</Text>
            </View>
        )
    }
    return <MealList items={favoriteMeals}/>
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    }
});