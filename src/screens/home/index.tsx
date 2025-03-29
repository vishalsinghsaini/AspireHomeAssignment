import { View, Text } from 'react-native';
import React from 'react';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';

export const Home = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    return (
        <View style={styles.container}>
            <Text style={{ alignContent: 'center', marginTop: '50%', justifyContent: 'center' }}>Home</Text>
        </View>
    );
};
