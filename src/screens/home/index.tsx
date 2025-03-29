import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';
import PopUpModal from '@components/popUpModal.tsx';
import { isAndroid } from '@theme/device/normalize';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@network/reducers/store';
import { useFetchCardsData } from '@network/api/hooks/fetch-cards';
import { setUserData } from '@network/reducers/home-reducer';

export const Home = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    const { userData } = useSelector((state: StoreType) => state.homeReducer);
    const dispatch = useDispatch()

    const getCardData = () => {
        useFetchCardsData().then(res => {
            if (res?.data) {
                dispatch(setUserData(res?.data))
            }
        })
    }

    useEffect(() => {
        getCardData()
    }, []);

    return (
        <>
            <View style={[styles.container, isAndroid() ? styles.pt32 : {}]}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.mb24]}>Debit Card</Text>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/Logo.png')}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.subtitle}>Available balance</Text>
                <View style={styles.currencyContainer}>
                    <View style={styles.symbolContainer}>
                        <Text style={styles.symbol}>S$</Text>
                    </View>
                    <Text style={styles.title}>
                        {userData?.availableBalance?.toLocaleString()}
                    </Text>
                </View>
                <PopUpModal />
            </View>
        </>
    );
};
