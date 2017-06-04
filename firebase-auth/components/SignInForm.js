import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

// need to add the root URL of our cloudfunctions app so we can shorten the full URL
const ROOT_URL = ''

class SignInForm extends Component {
    render() {
        state = { phone: '', code: '' }

        handleSubmit = async () => {
            const { phone, code } = this.state
            try {
                let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code })

                firebase.auth().signInWithCustomToken(data.token)
            } catch (err) {
                console.log(err);
            }
        }

        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}  />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}  />
                </View>

                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        )
    }
}

export default SignInForm;
