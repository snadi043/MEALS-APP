import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy_data";
import { useRoute } from "@react-navigation/native";
import MealItemInfo from "../components/MealItemInfo";

function MealDetailsScreen(){
    const route = useRoute();
    const mealId = route.params.mealId;

    const selectedMealDetails = MEALS.find((meal) => meal.id === mealId);
    return(
        <View>
            <Image source={{uri: selectedMealDetails.imageUrl}} style={styles.image}/>
            <Text>{selectedMealDetails.title}</Text>
            <MealItemInfo 
                duration={selectedMealDetails.duration} 
                affordability={selectedMealDetails.affordability} 
                complexity={selectedMealDetails.complexity}/>
            <Text>Ingredients</Text>
                {selectedMealDetails.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
            <Text>Steps</Text>
                {selectedMealDetails.steps.map((step) => <Text key={step}>{step}</Text>)}
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: '100%',
    },

});