import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

import LoginForm from './components/LoginForm'
import WeedList from './components/WeedList'
import AddWeedForm from './components/AddWeedForm'

class App extends Component {
    render() {
        return (
            <Router />
        )
    }
}

export default App;



/*
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


<Provider store={store}>
    <Router />
</Provider>

*/
