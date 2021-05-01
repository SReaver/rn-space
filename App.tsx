import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './src/Screens/MainScreen';
import { DetailsScreen } from './src/Screens/DetailsScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import {SpaceProvider} from './src/context/context';

const Stack = createStackNavigator();

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SpaceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  headerMode="none">
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SpaceProvider>
  )
}