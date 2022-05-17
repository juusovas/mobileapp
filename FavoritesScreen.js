import { StyleSheet, View, Text, ImageBackground, FlatList } from "react-native";


export default function FavoritesScreen() {


    return (

        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/cokctail.jpg')}
                style={styles.image}
            />
            <Text style={styles.title}>The Cocktail Hero</Text>
            <Text style={styles.subtitle}>Favorite recipes</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    titles: {
        marginTop: '10%',
        marginBottom: '10%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
    }
});
