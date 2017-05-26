import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

class SingleWeedEntry extends Component {
    state = {
        clicked: false
    }

    render() {
        const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle } = styles;
        const { strain, rank } = this.props;

        return (
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: `http://herb.co/wp-content/uploads/2016/04/20-weed-iceland-3.jpg?x88442` }}
                        style={thumbnailStyle} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{strain}</Text>
                    <Text>Rank: {rank}</Text>
                </View>
            </CardSection>
        )
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
};


export default SingleWeedEntry;
