import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import WeedList from './components/WeedList';
import AddWeedForm from './components/AddWeedForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene
                key="weedList"
                component={WeedList}
                title="WeedList"
                onRight={() => Actions.addWeedForm() }
                rightTitle="Add" />
            <Scene
                key="addWeedForm"
                component={AddWeedForm}
                title="Add Weed" />
        </Router>
    )
}

export default RouterComponent;
