import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy_data";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealItemInfo from "../components/MealList/MealItemInfo";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";

function MealDetailsScreen(){
    const route = useRoute();
    const navigation = useNavigation();
    const mealId = route.params.mealId;

    const favoriteMealCtx = useContext(FavoriteContext);

    const isFavoriteMeal = favoriteMealCtx.ids.includes(mealId);

    function favoriteMealHandler(){
        if(isFavoriteMeal){
            favoriteMealCtx.removeFavorite(mealId);
        }
        else{
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    onPress={favoriteMealHandler} 
                    icon={isFavoriteMeal ? 'favorite' : 'favorite-outline'} 
                    color='white'/>
            }
        })
    }, [favoriteMealHandler, navigation]);

    const selectedMealDetails = MEALS.find((meal) => meal.id === mealId);
    return(
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMealDetails.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMealDetails.title}</Text>
            <MealItemInfo 
                duration={selectedMealDetails.duration} 
                affordability={selectedMealDetails.affordability} 
                complexity={selectedMealDetails.complexity}
                textStyle={styles.detailText}
                />
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                        <List dataProp={selectedMealDetails.ingredients}/>
                    <SubTitle>Steps</SubTitle>
                        <List dataProp={selectedMealDetails.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32,
    },
    image:{
        height: 300,
        width: '100%',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
        color: 'white',
    },
    detailText:{
        color: 'white'
    },
    listContainer:{
        width: '80%',
    },
    outerContainer:{
        alignItems: 'center'
    }
});