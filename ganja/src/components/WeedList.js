import React, { Component } from 'react';
import { Text, View } from 'react-native';

import SingleWeedCardSection from './SingleWeedCardSection'
import Header from './Header'
import { Card } from './common';

class WeedList extends Component {
    render() {
        return (
            <View>
                <Card>
                    <SingleWeedCardSection
                        strain="Lemon Kush"
                        rank="awesome"/>
                    <SingleWeedCardSection
                        strain="Lemon Kush"
                        rank="awesome"/>
                    <SingleWeedCardSection
                        strain="Lemon Kush"
                        rank="awesome"/>
                    <SingleWeedCardSection
                        strain="Lemon Kush"
                        rank="awesome"/>
                </Card>
            </View>
        )
    }
}

export default WeedList;
