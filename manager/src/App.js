import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAtDjW2BWhKk-WWP62hmzBbDCM82Vn0e2o",
            authDomain: "manager-1add2.firebaseapp.com",
            databaseURL: "https://manager-1add2.firebaseio.com",
            projectId: "manager-1add2",
            storageBucket: "manager-1add2.appspot.com",
            messagingSenderId: "992873726318"
        }

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
