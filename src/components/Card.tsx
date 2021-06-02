import React, { useContext, FC } from 'react';
import { SpaceContext } from '../context/context';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ICard } from '../interfaces';

export const Card: FC<ICard> = ({ item, style }) => {
    const navigation = useNavigation()
    const { setSpace } = useContext(SpaceContext);
    const onPress = () => {
        setSpace!(item);
        navigation.navigate('Details')
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...style, ...styles.container }}
        >
            <Image source={{ uri: item.url }}
                style={styles.image}
            />
            <Text style={styles.text}
            >{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        height: 357,
        width: 290,
        marginHorizontal: 10,
        position: 'relative',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    text: {
        position: 'absolute',
        bottom: 32,
        left: 30,
        right: 30,
        fontFamily: 'Montserrat_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        color: '#FFF'
    }
});