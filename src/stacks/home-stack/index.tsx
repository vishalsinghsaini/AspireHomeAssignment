import { navigations } from '@config/app-navigation/constant'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '@stacks/bottom-tabs';
import React from 'react';

const Stack = createStackNavigator()
export const HomeStack = () => {
    const initialRouteName = navigations.BOTTOMTABS
    const header = () => null;

    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name={navigations.BOTTOMTABS} component={BottomTabs} options={{ header }} />
        </Stack.Navigator>
    )
}