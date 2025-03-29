import { View, Text, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '@assets/constants'
import { useAppTheme } from '@app-hooks/use-app-theme'
import { createStyleSheet } from './style'
import Card from '@components/card'

export interface MenuObj {
    id: string
    menuTitle: string
    menuSubtitle: string
    iconAssetUri: any
    buttonState: number
    itemEnabled: boolean
}

const CARD_WIDTH = (screenWidth - 48);  //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const PopUpModal = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    const isSpendingLimitSet = false
    const currencyUnits = "INR"
    const spendingLimit = 40

    const menuArr: Array<MenuObj> = [
        {
            id: "MenuItem#1",                                              // A unique id to supress the warning and optimize changes
            menuTitle: "Top-up account",                                    // The Title of the menu Item
            menuSubtitle: "Deposit money to your account to use with card", // The subtitle of the menu Item
            iconAssetUri: require("../../assets/images/insight.png"),                             // Uri for the icon
            buttonState: -1,                                                //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active 
            itemEnabled: false,                                             //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
        },
        {
            id: "MenuItem#2",                                              // A unique id to supress the warning and optimize changes
            menuTitle: "Weekly spending limit",                                    // The Title of the menu Item
            menuSubtitle: isSpendingLimitSet ? "Your weekly spending limit is " + currencyUnits + " " + spendingLimit : "You haven't set any spending limit on card", // The subtitle of the menu Item
            iconAssetUri: require("../../assets/images/Transfer-2.png"),                             // Uri for the icon
            buttonState: isSpendingLimitSet ? 1 : 0,                                                //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
            itemEnabled: true,                                             //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
        },
        {
            id: "MenuItem#3",                                              // A unique id to supress the warning and optimize changes
            menuTitle: "Freeze card",                                    // The Title of the menu Item
            menuSubtitle: "Your debit card is currently active", // The subtitle of the menu Item
            iconAssetUri: require("../../assets/images/Transfer-3.png"),                             // Uri for the icon
            buttonState: 0,                                                //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
            itemEnabled: false,                                             //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
        },
        {
            id: "MenuItem#4",                                              // A unique id to supress the warning and optimize changes
            menuTitle: "Get a new card",                                    // The Title of the menu Item
            menuSubtitle: "This deactivates your current debit card", // The subtitle of the menu Item
            iconAssetUri: require("../../assets/images/Transfer-1.png"),                             // Uri for the icon
            buttonState: -1,                                                //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
            itemEnabled: false,                                             //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
        },
        {
            id: "MenuItem#5",                                              // A unique id to supress the warning and optimize changes
            menuTitle: "Deactivated cards",                                    // The Title of the menu Item
            menuSubtitle: "Your previously deactivated cards", // The subtitle of the menu Item
            iconAssetUri: require("../../assets/images/Transfer.png"),                             // Uri for the icon
            buttonState: -1,                                                //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
            itemEnabled: false,                                             //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
        }
    ];

    const renderButton = (buttonState: number) => {
        if (buttonState == -1) {
            //No Button Present
            return (<View style={{ display: 'none' }}></View>);
        }
        else if (buttonState == 0) {
            return (
                <View style={{
                    alignItems: 'flex-end',
                    flex: 1
                }}>
                    <Image
                        style={{
                            width: 34,
                            height: 20,
                        }}
                        source={require("../../assets/images/toggle.png")}
                        resizeMode='contain'
                    />
                </View>
            );
        }
        else if (buttonState == 1) {
            return (
                <View style={{
                    alignItems: 'flex-end',
                    flex: 1
                }}>
                    <Image
                        style={{
                            width: 34,
                            height: 20,
                        }}
                        source={require("../../assets/images/activeToggle.png")}
                        resizeMode='contain'
                    />
                </View>
            );
        }
    }

    const renderItem: ListRenderItem<MenuObj> = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: 'white', marginTop: -1 }}>
                <View style={{ marginLeft: 24, marginRight: 24 }}>
                    <TouchableOpacity
                        onPress={() => {
                            // loadMenuItem(item.id, item.buttonState);
                        }}
                        disabled={!(item.itemEnabled)}
                    >
                        <View style={styles.menuItem}>
                            <Image
                                style={{ width: 32 }}
                                source={item.iconAssetUri}
                                resizeMode='contain'
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                                <Text style={styles.menuTitle}>{item.menuTitle}</Text>
                                <Text style={styles.menuSubtitle}>{item.menuSubtitle}</Text>
                            </View>
                            {renderButton(item.buttonState)}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const totalMenuItemHeight = (isSpendingLimitSet) ? (CARD_HEIGHT + 32 - 90 + 65 + (63 * menuArr?.length) + 243) : (CARD_HEIGHT + (63 * menuArr.length) + 243);
    const extraPaddingNeeded = (totalMenuItemHeight > (screenHeight - 40)) ? 60 : ((screenHeight - 40) - totalMenuItemHeight);

    const renderHeaderComponent = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerHeight} />
                <Card />
            </View>
        )
    }

    const renderFooterComponent = () => <View style={[styles.footer, { height: extraPaddingNeeded }]} />

    return (
        <FlatList
            style={styles.container}
            bounces={true}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={renderHeaderComponent}
            ListFooterComponent={renderFooterComponent}
            data={menuArr}
            renderItem={renderItem}
        >
        </FlatList>
    )
}

export default PopUpModal