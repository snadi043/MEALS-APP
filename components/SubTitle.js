import {View, Text, StyleSheet} from 'react-native';

function SubTitle({children}){
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{children}</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    infoContainer:{
        fontWeight: 'bold',
        fontSize: 8,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    infoText:{
        color: '#e2b497',
        textAlign: 'center',
        padding: 6,
        fontWeight: 'bold',
    }
});