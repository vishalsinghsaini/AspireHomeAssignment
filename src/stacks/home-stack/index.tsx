import { navigations } from '@config/app-navigation/constant'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/home';
import React from 'react';

const Stack = createStackNavigator()
export const HomeStack = () => {
    const initialRouteName = navigations.HOME
    const header = () => null;

    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name={navigations.HOME} component={Home} options={{ header }} />
        </Stack.Navigator>
    )
}