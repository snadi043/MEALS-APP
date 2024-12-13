import { View, Text, Pressable, StyleSheet } from "react-native";

function CategoryListGrid({title, color}){
    return <View style={styles.gridItemContainer}>
        <Pressable style={styles.pressableButton}>
            <View style={styles.innerGridContainer}>
                <Text>{title}</Text>
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

    },
    pressableButton: {
        flex: 1,
    },
    innerGridContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',

    }
});