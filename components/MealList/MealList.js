import { useNavigation} from "@react-navigation/native";

import {View, StyleSheet, FlatList} from 'react-native';
import IndividualMealItem from '../IndividualMealItem';

function MealList({items}){

    const navigation = useNavigation();

 
function displayMealItem(itemData){
    const item = itemData.item;
    const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability,
    }

    return <IndividualMealItem {...mealItemProps} onPressMealCard={()=>navigation.navigate('MealDetails', {mealId: mealItemProps.id})}/>
}

return (
    <View style={styles.rootContainer}>
        <FlatList
            data={items} 
            keyExtractor={(item) => item.id}
            renderItem={displayMealItem}
            />
    </View>
);
}
export default MealList;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
    }
})