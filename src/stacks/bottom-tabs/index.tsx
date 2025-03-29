import { useAppTheme } from "@app-hooks/use-app-theme";
import { images } from "@assets/images";
import { navigations } from "@config/app-navigation/constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createStyleSheet } from "./style"
import DebitCard from "@screens/debit-card";
import { Home } from "@screens/home";

export interface Obj {
    activeImage: string;
    label?: string;
    route?: string
}
export interface TabProps {
    item?: Obj,
    onPress?: any,
    accessibilityState?: any
}

export interface RefObj {
    animate?: any
}

const BottomTabStack = createBottomTabNavigator();

export const BottomTabs = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);

    const TabArr = [
        {
            route: navigations.HOME,
            label: "Home",
            activeImage: '../../assets/images/Home.png',
            component: Home,
        },
        {
            route: navigations.DEBIT,
            label: "Debit card",
            activeImage: '../../assets/images/Home.png',
            component: DebitCard,
        },
        {
            route: navigations.PAYMENT,
            label: "Payments",
            activeImage: '../../assets/images/Home.png',
            component: Home,
        },
        {
            route: navigations.CREDIT,
            label: "Credit",
            activeImage: '../../assets/images/Home.png',
            component: Home,
        },
        {
            route: navigations.PROFILE,
            label: "Profile",
            activeImage: '../../assets/images/Home.png',
            component: Home,
        },
    ];


    const TabButton = (props: TabProps) => {
        const { item, onPress, accessibilityState } = props || {};
        const focused = accessibilityState.selected;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={1}
                    style={styles.image}
                >
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/Home.png')}
                        resizeMode='contain'
                    />
                    <Text style={[styles.label, !focused && styles.color]}>
                        {item?.label}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <BottomTabStack.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBarstyle,
                }}
                initialRouteName={navigations.DEBIT}
            >
                {TabArr.map((tab, index) => {
                    return (
                        <BottomTabStack.Screen
                            key={index}
                            name={tab?.route}
                            component={tab?.component}
                            options={() => ({
                                tabBarShowLabel: false,
                                tabBarButton: (props) => (<TabButton {...props} item={tab} />),
                            })}
                        />
                    );
                })}
            </BottomTabStack.Navigator>

        </>
    );
};

export default BottomTabs;
