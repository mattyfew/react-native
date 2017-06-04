import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

class App extends React.Component {
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyC5btdGyTFstK0vVq_zFVK-DquR2Xk_Cy0",
            authDomain: "one-time-password-93597.firebaseapp.com",
            databaseURL: "https://one-time-password-93597.firebaseio.com",
            projectId: "one-time-password-93597",
            storageBucket: "one-time-password-93597.appspot.com",
            messagingSenderId: "542949862930"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={styles.container}>
                <SignUpForm/>
                <SignInForm/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

Expo.registerRootComponent(App);
