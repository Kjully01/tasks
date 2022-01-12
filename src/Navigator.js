import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

import Menu from './screens/Menu'
import commonStyles from './commonStyles'

/* const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
            fontWeight: 'bold'
        }
    }
} */

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const DrawerNavigator = props => {
   //console.warn(props.route.params.email)
   //console.warn(props)
   const email = props.route.params.email
   const name = props.route.params.name

    return (
        <Drawer.Navigator  
          initialRouteName='Today'
          drawerContent={ (props) => <Menu {...props} email={email} name={name}/>}
          screenOptions={{ 
              headerShown: false, 
              drawerActiveTintColor: '#080',
            }}
          > 
            <Drawer.Screen name="Today" options={{ title: 'Hoje' }}>
                {props => <TaskList {...props} title='Hoje' daysAhead={0} />}
            </Drawer.Screen>
            <Drawer.Screen name="Tomorrow" options={{ title: 'Amanhã' }}>
                {props => <TaskList {...props} title='Amanhã' daysAhead={1} />}
            </Drawer.Screen>
            <Drawer.Screen name="Week" options={{ title: 'Semana' }}>
                {props => <TaskList {...props} title='Semana' daysAhead={7} />}
            </Drawer.Screen>
            <Drawer.Screen name="Month" options={{ title: 'Mês' }}>
                {props => <TaskList {...props} title='Mês' daysAhead={30} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    );
};
 
const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};
 
export default Navigator;

/* import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const Drawer = createDrawerNavigator

const mainRoutes ={
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: TaskList
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {initialRouteName: 'Auth'})


export default createAppContainer(mainNavigator) */