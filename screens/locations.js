import React, { Component } from 'react';
import Doors from './Doors';

import {
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Locations extends Component {


    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
            <Text> PNL </Text >
            <Button
                    title="Go to Doors'"
                    onPress={() => navigate('Doors')}

            />
                    
            </View>
        );
    }
};