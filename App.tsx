import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { ThemeProps } from '@theme/theme';
import { navigations } from '@config/app-navigation/constant';
import { AppNavigation } from '@config/app-navigation';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { Provider } from 'react-redux';
import { store } from '@network/reducers/store';
import { API } from '@network/api';
import { storeEnv } from '@config/env';

export default function AppComponent(): React.JSX.Element {
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);

  const storeAppEnv = async () => {
    await storeEnv();
  };

  useEffect(() => {
    storeAppEnv();
    API.initService();
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation initialScreen={navigations.HOMESTACK} />
      </SafeAreaView>
    </Provider>
  );
}

const createStyleSheet = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      flex: 1
    }
  });
