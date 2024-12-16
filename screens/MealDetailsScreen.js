import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

function MealDetailsScreen(){
    const route = useRoute();
    const mealId = route.params.mealId;
    return(
        <View>
            <Text>Meal Details Screen - {mealId}</Text>
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({

});