import { View, Text, Image } from 'react-native';
import React from 'react';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';
import PopUpModal from '@components/popUpModal.tsx';

export const Home = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    return (
        <View style={styles.container}>
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
                    3,000
                </Text>
            </View>
            <PopUpModal />
        </View>
    );
};
