import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import IndividualMealItem from "../components/IndividualMealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen(){

    function displayMealItem(itemData){
        const item = itemData.item;
        const props = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return <IndividualMealItem {...props} />
    }

    const route = useRoute();
    const navigation = useNavigation();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {return mealItem.categoryIds.indexOf(catId) >= 0});
    
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [catId, navigation]);
    
    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={displayMealItem}
                />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
    }
})