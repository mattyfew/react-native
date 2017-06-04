import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

// need to add the root URL of our cloudfunctions app so we can shorten the full URL
const ROOT_URL = ''

class SignUpForm extends Component {
    render() {
        state = { phone: ''}

        handleSubmit = async () => {
            try {
                await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
                await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
            } catch (err) {
                console.log(err)
            }
        }

        /* This runs the same as the code above. The code above uses the ES6 async/await system to work with promises.

        handleSubmit = () => {
            // need to pass in link to one-time-password create function. Firebase deploy hasn't been working :(
            axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
                .then(() => {
                    axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone: this.state.phone })
                    // need to pass request_one_time_password here
                })
        }
        */

        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}  />
                </View>
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        )
    }
}

export default SignUpForm;
