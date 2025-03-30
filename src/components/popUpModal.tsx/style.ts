import { screenHeight } from '@assets/constants';
import { isAndroid, moderateScale, normalizedHeight, normalizedWidth } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        backgroundColor: theme.colors.transparent,
        width: '100%',
        flex: 1,
    },
    list: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        backgroundColor: theme.colors.white,
        marginBottom: normalizedHeight(32),
        borderTopRightRadius: moderateScale(12),
        borderTopLeftRadius: moderateScale(12)
    },
    footer: {
        backgroundColor: theme.colors.white,
        marginTop: -normalizedHeight(1)
    },
    menuContainer: {
        marginHorizontal: normalizedWidth(24),
        marginBottom: normalizedHeight(32),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    menuTitle: {
        height: 19,
        fontWeight: '400',
        fontSize: 14,
        alignContent: 'flex-start',
        flex: 1,
        marginBottom: 2,
    },
    menuSubtitle: {
        height: 18,
        fontWeight: '300',
        fontSize: 12,
        color: 'rgba(34,34,34,0.4)'
    },
    headerContainer: {
        alignItems: 'center'
    },
    headerHeight: {
        backgroundColor: 'transparent',
        flex: 1,
        height: screenHeight * (isAndroid() ? 0.35 : 0.28)
    }
})




