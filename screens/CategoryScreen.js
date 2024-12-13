import { FlatList} from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryListGrid from "../components/CategoryListGrid";
import { useNavigation } from "@react-navigation/native";


function CategoryScreen(){
    const navigation = useNavigation();

    function renderItemCategoryList(itemData){
        
        // function gridPressHandler(){
        //     navigaton.navigate('MealsOverview');
        // }
    
        return <CategoryListGrid 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={() => navigation.navigate('MealsOverview', {categoryId: itemData.item.id})}
            />
    }

    return <FlatList 
    data={CATEGORIES} 
    renderItem={renderItemCategoryList}
    keyExtractor={(item) => item.id}
    numColumns={2}
    />
}
export default CategoryScreen;