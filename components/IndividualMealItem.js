import {View, Text, Image, Pressable, StyleSheet, Platform} from 'react-native';

function IndividualMealItem({title, imageUrl, duration, affordability, complexity}){
    return <View style={styles.mealItemContainer}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDetail}>{duration}m</Text>
                    <Text style={styles.itemDetail}>{affordability.toUpperCase()}</Text>
                    <Text style={styles.itemDetail}>{complexity.toUpperCase()}</Text>
                </View>
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
    buttonPressed: {
        opacity: 0.5,
    }
})