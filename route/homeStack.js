import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{ createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';
import CarFile from '../screens/carFile';

export const AppNavigator = () =>(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{title: 'Bem-vindo'}}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{title: 'Home'}}
            />
            <Stack.Screen
                name='CarFile'
                component={CarFile}
                options={{title: 'Car File'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
)