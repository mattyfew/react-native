import React, {Component} from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAAwBRoV6O_-3um2Og1qFGzZLEthyK0maE",
            authDomain: "authentication-893bc.firebaseapp.com",
            databaseURL: "https://authentication-893bc.firebaseio.com",
            projectId: "authentication-893bc",
            storageBucket: "authentication-893bc.appspot.com",
            messagingSenderId: "495893054844"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                )
            case false:
                return <LoginForm />;
            case null:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;
