import {View, Text, Image, Pressable, StyleSheet, Platform} from 'react-native';
import MealItemInfo from './MealList/MealItemInfo';

function IndividualMealItem({title, imageUrl, duration, affordability, complexity, onPressMealCard}){
    return <View style={styles.mealItemContainer}>
        <Pressable
            onPress={onPressMealCard} 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealItemInfo duration={duration} affordability={affordability} complexity={complexity}/>
            </View>
        </Pressable>
    </View>
}
export default IndividualMealItem;

const styles = StyleSheet.create({
    mealItemContainer: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {height: 2, width:0},
        shadowRadius: 8,
        shadowOpacity: 0.25, 
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden',
    },
    image:{
        height: 200,
        width: '100%',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:'center',
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    }
})