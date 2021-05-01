import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SpaceContext} from '../context/context';

export const DetailsScreen = () => {
    const navigation = useNavigation()
    const {space}=useContext(SpaceContext);

    return (
        <View style={styles.details}>
            <View style={styles.picture}>
                <Image
                    style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                    source={{uri: space!.url}}
                />
                 <TouchableOpacity
                    style={styles.back}
                    onPress={navigation.goBack} 
                    >
                    <Text style={styles.btnText}>Back</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.info}>
                <Text style={styles.title}>{space?.title}</Text>
                <Text style={styles.description}>{space?.explanation}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        flex: 1
    },
    picture: {
        position: 'relative',
        height: '50%'
    },
    back: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Montserrat_500Medium',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 22
    },
    info: { 
        marginTop: 38,
        marginBottom: 30,
        marginHorizontal: 30
    },
    title:{
        marginBottom: 30,
        fontFamily: 'Montserrat_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 37,
        color: '#000'
    },
    description:{
        fontFamily: 'Montserrat_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 22,
        color: '#000',
        textAlign: 'justify'
    }
})
