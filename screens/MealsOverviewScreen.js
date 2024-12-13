import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen(){
    const route = useRoute();
    const catId = route.params.categoryId;

    return (
        <View style={styles.rootContainer}>
            <Text>Meals Overview Screen - {catId}</Text>
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