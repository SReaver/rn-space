import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View, TextInput
} from 'react-native';

import { ISpace } from '../interfaces';
import { Card } from '../components/Card';

// uncomment for offline use
// import data from '../data';


export const MainScreen = () => {
    const [planets, setPlanets] = useState<ISpace[]>([]);
    const [inputState, setInputState] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    // uncomment for offline use
    // useEffect(()=>{
    //   setPlanets(data);
    // },[])

    useEffect((): void => {
      setError('');
      fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10')
      .then(res=>{
        if(!res.ok) {
          setError('Network error');
          throw new Error('Network error')
        }
        return res;
      })
        .then(res => res.json())
        .then((res: ISpace[]) => {
          setPlanets(res);
        })
        .catch(console.error)
    }, [])

    const renderItem = ({ item, index }: { item: ISpace, index: number }) => {
      let cardStyle = {}
      if(index===0) cardStyle = {...cardStyle, ...styles.first}
      if(index===planets.length-1) cardStyle = {...cardStyle, ...styles.last}
      return <Card item={item} style={cardStyle} />;
    };

    const filtered = () => planets.filter(planet=>planet.title.toLowerCase().includes(inputState.toLowerCase()));
    
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.header}>Where do you want to go?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInputState}
            value={inputState}
            placeholder="Please input keywords"
            placeholderTextColor='#FFF'
        />
          <View>
            <Text style={styles.subtitle}>Big Space</Text>
            <Text style={styles.cardsHeader}>My space photo</Text>
          </View>
          {filtered().length === 0 && !error && <Text style={styles.nothing}>Nothing was found</Text>}
          <Text style={styles.error}>{error}</Text>
        </View>
        <View style={styles.cards}>
          <FlatList
          style={styles.flatlist}
            data={filtered()}
            renderItem={renderItem}
            keyExtractor={item => item.url}
            horizontal={true}
          />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    flatlist:{
      flex: 1,
      height: 357
    },
    main: {
      flex: 1,
      backgroundColor: '#4A064B',
    },
    container: {
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: 'space-between',
    },
    cards: {
      height: 357
    },
    first:{
      marginLeft: 30
    },
    last:{
        marginRight: 30
    },
    header: {
      fontFamily: 'Montserrat_700Bold',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 50,
      lineHeight: 61,
      width: 274,
      color: '#FFF'
    },
    subtitle: {
      fontFamily: 'Montserrat_500Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 22,
      color: '#FF9901',
    },
    cardsHeader:{
      fontFamily: 'Montserrat_600SemiBold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 30,
      lineHeight: 37,
      color: '#FFF',
    },
    input:{
      height: 50,
      paddingLeft: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.19)',
      borderRadius: 40,
      fontFamily: 'Montserrat_500Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 22,
      color: '#FFF'
    },
    nothing:{
      fontSize: 18,
      lineHeight: 22,
      color: '#FFF'
    },
    error: {
      color: 'red',
      fontSize: 20
    }
  });