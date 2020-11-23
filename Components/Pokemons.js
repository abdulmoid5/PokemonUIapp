import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ProgressBarAndroid,
} from 'react-native';

const Pokemons = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  const getNumber = num => {
    num = num.toString();
    const paddednum = num.padStart(3, '0');
    return paddednum;
  };

  const getRandomeValue = () => {
    let value = Math.random();
    value = value.toString();
    value = Number(
      value
        .split('')
        .splice(0, 3)
        .join(''),
    );
    return value;
  };

  return (
    <View style={{backgroundColor: '#fb0000'}}>
      
      <ScrollView style={styles.pokeWrapper}>
        <View style={styles.container}>
          {pokemons.map((pokemon, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('Details', {
                    pokemon: pokemon.name,
                    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  })
                }>
               
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  }}
                />
                <Text style={{lineHeight:30,fontWeight:'600'}}>{pokemon.name}</Text>
               
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  pokeWrapper: {
    backgroundColor: '#fffeeb',
    marginHorizontal: 7,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
  },
  image: {
    width: 160,
    height:145,
  },
  
});
