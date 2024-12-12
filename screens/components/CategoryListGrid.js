import { View, Text, Pressable } from "react-native";

function CategoryListGrid({title, color}){
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}
export default CategoryListGrid;