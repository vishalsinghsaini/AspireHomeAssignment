import { useAppTheme } from "@app-hooks/use-app-theme";
import { navigations } from "@config/app-navigation/constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createStyleSheet } from "./style"
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
            activeImage: require('../../assets/images/Home.png'),
            component: Home,
        },
        {
            route: navigations.DEBIT,
            label: "Debit card",
            activeImage: require('../../assets/images/pay.png'),
            component: Home,
        },
        {
            route: navigations.PAYMENT,
            label: "Payments",
            activeImage: require('../../assets/images/Payments.png'),
            component: Home,
        },
        {
            route: navigations.CREDIT,
            label: "Credit",
            activeImage: require('../../assets/images/Credit.png'),
            component: Home,
        },
        {
            route: navigations.PROFILE,
            label: "Profile",
            activeImage: require('../../assets/images/Account.png'),
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
                    {item && <Image
                        style={styles.icon}
                        source={item.activeImage}
                        resizeMode='contain'
                    />}
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
                initialRouteName={navigations.HOME}
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
