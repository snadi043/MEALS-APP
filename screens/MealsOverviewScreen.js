import { View, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy_data";
import IndividualMealItem from "../components/IndividualMealItem";

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
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {return mealItem.categoryIds.indexOf(catId) >= 0});

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