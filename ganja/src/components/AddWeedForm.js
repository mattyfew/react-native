import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from './Header'
import { Card, CardSection, Input, Button } from './common';

class AddWeedForm extends Component {
    onButtonPress() {
        console.log("anything");
    }

    render() {
        return(
            <View>
                <View>
                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="Name your bud" />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Description"
                            placeholder="Enter a description" />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Source"
                            placeholder="Where did you get it?" />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Rating"
                            placeholder="Rating?" />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                    </CardSection>
                </View>
            </View>
        )
    }
}

export default AddWeedForm;
