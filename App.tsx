import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { ThemeProps } from '@theme/theme';
import { navigations } from '@config/app-navigation/constant';
import { AppNavigation } from '@config/app-navigation';
import { useAppTheme } from '@app-hooks/use-app-theme';

export default function AppComponent(): React.JSX.Element {
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#0C365A' }} />
      <StatusBar barStyle={'dark-content'} />
      <AppNavigation initialScreen={navigations.HOMESTACK} />
    </View>
  );
}

const createStyleSheet = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      flex: 1
    },
  });
