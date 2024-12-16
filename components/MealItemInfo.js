import {View, Text, StyleSheet} from 'react-native';

function MealItemInfo({duration, affordability, complexity}){
    return(
        <View style={styles.itemDetails}>
            <Text style={styles.itemDetail}>{duration}m</Text>
            <Text style={styles.itemDetail}>{affordability.toUpperCase()}</Text>
            <Text style={styles.itemDetail}>{complexity.toUpperCase()}</Text>
        </View>
    );
} 
export default MealItemInfo;

const styles = StyleSheet.create({
    itemDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    itemDetail:{
        fontWeight: 'bold',
        fontSize: 12,
        marginHorizontal: 8,
    },
});