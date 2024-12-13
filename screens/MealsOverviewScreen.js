import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>Meals Overview Screen</Text>
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