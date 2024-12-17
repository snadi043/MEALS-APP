import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryListGrid({title, color, onPress}){
    return <View style={styles.gridItemContainer}>
        <Pressable
            onPress={onPress}
            android_ripple={{color:'#ccc'}} 
            style={({pressed}) => [
                styles.pressableButton,
                pressed ? styles.buttonPressed : null,
            ]}>
            <View style={[styles.innerGridContainer, {backgroundColor:color}]}>
                <Text style={styles.textStyles}>{title}</Text>
            </View>
        </Pressable>
    </View>
}
export default CategoryListGrid;

const styles = StyleSheet.create({
    gridItemContainer: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        height: 150,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {height: 2, width:0},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    pressableButton: {
        flex: 1,
    },
    buttonPressed:{
        opacity: 0.5,
    },
    innerGridContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textStyles:{
        fontWeight: 'bold',
        fontSize: 18
    }
});