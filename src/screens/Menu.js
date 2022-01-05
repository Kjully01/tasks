import React from 'react'
//import {ScrollView} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import { Gravatar } from 'react-native-gravatar'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <DrawerContentScrollView>
            <View>
                <Avatar.Image
                    source={{
                        uri:'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' 
                    }}
                    size={50}
                />
                <Title></Title> 
               {/*  <Text>{this.props.navigation.getParam()}</Text> */}
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {

    }
})

/* import React from "react";
import {View, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import commonStyles from "../commonStyles";

export default props => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source={{
                                    uri:'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' 
                                }}
                                size={50}
                            />
                        </View>
                        <View>
                            <Title style={styles.title}>Karen Jully</Title>
                            <Caption style={styles.caption}>kjully@teste.com</Caption>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='home'
                                    size={size}
                                    color={color}/>
                            )}
                            label='Home'
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name='power-off'
                            size={size}
                            color={color}/>
                    )}
                    label='Sign out'
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
}) */

