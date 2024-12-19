import { useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";


function MealsOverviewScreen(){

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

    return <MealList items={displayedMeals}/>
}

export default MealsOverviewScreen;

