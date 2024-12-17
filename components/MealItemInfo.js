import {View, Text, StyleSheet} from 'react-native';

function MealItemInfo({duration, affordability, complexity, style, textStyle}){
    return(
        <View style={[styles.itemDetails, style]}>
            <Text style={[textStyle, styles.itemDetail]}>{duration}m</Text>
            <Text style={[textStyle, styles.itemDetail]}>{affordability.toUpperCase()}</Text>
            <Text style={[textStyle, styles.itemDetail]}>{complexity.toUpperCase()}</Text>
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