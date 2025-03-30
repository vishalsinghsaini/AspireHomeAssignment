import { View, Text, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useAppTheme } from '@app-hooks/use-app-theme'
import { createStyleSheet } from './style'
import Card from '@components/card'

export interface MenuObj {
    id: number
    menuTitle: string
    menuSubtitle: string
    iconAssetUri: any
    showToggele: boolean
    itemEnabled: boolean
}

const PopUpModal = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);

    // we can fetch this as well from /cards getFetchCards api where iconAssetUri will be a string path
    const [menuArr, setMenuArr] = useState<MenuObj[]>([
        {
            id: 1,
            menuTitle: "Top-up account",
            menuSubtitle: "Deposit money to your account to use with card",
            iconAssetUri: require("../../assets/images/insight.png"),
            showToggele: false,
            itemEnabled: false,
        },
        {
            id: 2,
            menuTitle: "Weekly spending limit",
            menuSubtitle: "You haven't set any spending limit on card",
            iconAssetUri: require("../../assets/images/Transfer-2.png"),
            showToggele: true,
            itemEnabled: false,
        },
        {
            id: 3,
            menuTitle: "Freeze card",
            menuSubtitle: "Your debit card is currently active",
            iconAssetUri: require("../../assets/images/Transfer-3.png"),
            showToggele: true,
            itemEnabled: false,
        },
        {
            id: 4,
            menuTitle: "Get a new card",
            menuSubtitle: "This deactivates your current debit card",
            iconAssetUri: require("../../assets/images/Transfer-1.png"),
            showToggele: false,
            itemEnabled: false,
        },
        {
            id: 5,
            menuTitle: "Deactivated cards",
            menuSubtitle: "Your previously deactivated cards",
            iconAssetUri: require("../../assets/images/Transfer.png"),
            showToggele: false,
            itemEnabled: false,
        }
    ]);

    const toggleFreezeCard = () => {
        setMenuArr(prev =>
            prev.map(item =>
                item.id === 3
                    ? { ...item, itemEnabled: !item.itemEnabled }
                    : item
            )
        );
    };

    const isCardFreezed = useMemo(() => {
        return menuArr.some(ele => ele.id === 3 && ele.itemEnabled);
    }, [menuArr]);


    const renderButton = (item: MenuObj) => {
        if (!item?.showToggele)
            return null

        return (
            <TouchableOpacity
                style={{ alignItems: 'flex-end', flex: 1 }}
                onPress={() => {
                    if (item?.id === 3) toggleFreezeCard();
                }}
            >
                <Image
                    style={{ width: 34, height: 20 }}
                    source={
                        item?.itemEnabled
                            ? require("../../assets/images/activeToggle.png")
                            : require("../../assets/images/toggle.png")
                    }
                    resizeMode="contain"
                />
            </TouchableOpacity>
        );
    };

    const renderItem: ListRenderItem<MenuObj> = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.id === 3) toggleFreezeCard();
                }}
                style={styles.menuContainer}
                disabled={!item.itemEnabled}
            >
                <Image
                    style={{ width: 32 }}
                    source={item.iconAssetUri}
                    resizeMode="contain"
                />
                <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                    <Text style={styles.menuTitle}>{item.menuTitle}</Text>
                    <Text style={styles.menuSubtitle}>{item.menuSubtitle}</Text>
                </View>
                {renderButton(item)}
            </TouchableOpacity>
        );
    };

    const renderHeaderComponent = () => {
        return (
            <View style={styles.headerContainer}>
                <Card isCardFreezed={isCardFreezed} />
            </View>
        );
    };

    return (
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            ListHeaderComponent={renderHeaderComponent}
            data={menuArr}
            contentContainerStyle={styles.list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default PopUpModal;
