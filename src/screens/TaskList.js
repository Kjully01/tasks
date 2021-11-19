import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={todayImage}>

                </ImageBackground>
                <Text>TaskList</Text>
            </View>
        )
    }
}