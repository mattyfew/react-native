import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends Component {
    render() {
        // const MainNavigator = TabNavigator({
        //     welcome: { screen: WelcomeScreen },
        //     auth: { screen: AuthScreen },
        //     main: {
        //         screen: TabNavigator({
        //             map: { screen: MapScreen },
        //             deck: { screen: DeckScreen },
        //             review: {
        //                 screen: StackNavigator({
        //                     review: { screen: ReviewScreen },
        //                     settings: { screen: SettingsScreen }
        //                 })
        //             }
        //         })
        //     }
        // })

        return (
        <View style={styles.container}>
            <WelcomeScreen />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
