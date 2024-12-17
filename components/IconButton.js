import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function IconButton({icon, color, onPress}){
    return <Pressable onPress={onPress} style={({pressed}) => pressed && StyleSheet.pressed}>
                <MaterialIcons name={icon} color={color} size={24}/>
            </Pressable>
}
export default IconButton;

const style=StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})