import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy_data";

function CategoryScreen(){
    return <FlatList 
    data={CATEGORIES} 
    renderItem={({item}) => <Text>{item.title}</Text>}
    keyExtractor={(item) => item.id}
    />
}
export default CategoryScreen;