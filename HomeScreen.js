import { StyleSheet, View, Text, Alert, Image, TextInput, FlatList, ImageBackground } from "react-native";
import React, { useState } from 'react';
import { Header, Input, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import FavoritesScreen from './FavoritesScreen';

export default function HomeScreen() {

    const [name, setName] = useState('');
    const [instructions, setInstructions] = useState('');
    const [repository, setRepository] = useState([]);
    const [drinklist, setDrinklist] = useState([]);

    // Haetaan cocktail hakusanan mukaan
    const fetchData = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(response => response.json())
            .then(data => setRepository(data.drinks))
            .catch(err => Alert.alert("Error, something went wrong"))
    }

    // Haetaan random cocktail
    const showRandom = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(data => setRepository(data.drinks))
            .catch(err => Alert.alert("Error, something went wrong"))
    }

    const showInstruction = () => {
        Alert.alert("Instructions");
    }

    const addToFavorites = () => {
        Alert.alert('Added to your favorites');
    }

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 3,
                    width: '100%',
                    backgroundColor: "white",
                }}
            />
        );
    };

    console.log(drinklist);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/drink.jpg')}
                style={styles.image}
            />

            <Header
            // centerComponent={{ text: 'Title', style: { color: '#FFF' } }}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>The Cocktail Hero</Text>
                <Text style={styles.subtitle}>Search for your favorite drink recipes</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%', width: '90%' }}>
                <Input style={{ width: 200, color: 'white', fontSize: 18, fontWeight: 'bold' }}
                    placeholder="Search for cocktail..."
                    placeholderTextColor='white'
                    onChangeText={text => setName(text)}
                    rightIcon={{ name: 'search', color: 'white', size: 40 }}
                />
            </View>
            <FlatList
                data={repository}
                keyExtractor={item => item.idDrink}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item }) =>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20 }}> {item.strDrink}
                            <Icon name="star" color='yellow' onPress={() => setDrinklist([...drinklist, item.idDrink])} /> </Text>
                        <Text style={{ color: 'white', fontSize: 16 }}> {item.strGlass}</Text>

                        <Image style={{ width: 350, height: 280 }}
                            source={{ uri: `${item.strDrinkThumb}` }}
                        />
                        <Button title="See instructions" onPress={showInstruction} ></Button>
                    </View>
                }
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: 10, width: '100%' }}>
                <Button title="Find cocktail" onPress={fetchData} />
                <Button title="Search random cocktail" onPress={showRandom} />
            </View>
        </View>

    );

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