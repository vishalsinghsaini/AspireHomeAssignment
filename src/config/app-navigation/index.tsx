import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigations } from './constant';
import { HomeStack } from '@stacks/home-stack';
export interface AppNavigationProps {
    initialScreen?: string
}

export const AppNavigation = (props: AppNavigationProps) => {
    const { initialScreen = navigations.HOMESTACK } = props;
    const AppStack = createStackNavigator();

    const header = () => null;
    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer
                    ref={(_: NavigationContainerRef<any>) => {
                    }}
                >
                    <AppStack.Navigator initialRouteName={initialScreen}>
                        <AppStack.Screen name={navigations.HOMESTACK} component={HomeStack} options={{ header }} />
                    </AppStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    )
}
