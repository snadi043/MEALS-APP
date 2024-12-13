import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryListGrid from "../components/CategoryListGrid";

function renderItemCategoryList(itemData){
    return <CategoryListGrid title={itemData.item.title} color={itemData.item.color}/>
}

function CategoryScreen(){
    return <FlatList 
    data={CATEGORIES} 
    renderItem={renderItemCategoryList}
    keyExtractor={(item) => item.id}
    numColumns={2}
    />
}
export default CategoryScreen;