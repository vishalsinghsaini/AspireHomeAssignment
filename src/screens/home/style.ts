import { lineHeightScale, moderateScale, normalizedHeight, normalizedWidth } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        backgroundColor: '#0C365A',
        flex: 1,
    },
    pt32: {
        paddingTop: normalizedHeight(32)
    },
    title: {
        fontSize: theme.fontSize.font24,
        lineHeight: lineHeightScale(32),
        color: theme.colors.white,
        fontWeight: 800
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalizedWidth(24)
    },
    mb24: {
        marginBottom: normalizedHeight(24)
    },
    subtitle: {
        fontSize: theme.fontSize.font14,
        color: theme.colors.white,
        fontWeight: 400,
        marginBottom: normalizedHeight(15),
        paddingHorizontal: normalizedWidth(24)
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: normalizedWidth(24)
    },
    symbolContainer: {
        backgroundColor: '#01D167',
        justifyContent: 'center',
        height: normalizedHeight(22),
        width: normalizedWidth(40),
        borderRadius: moderateScale(4),
        marginRight: normalizedWidth(10),
        alignItems: 'center'
    },
    symbol: {
        fontSize: theme.fontSize.font14,
        color: theme.colors.white,
        fontWeight: 400
    },
    icon: {
        height: normalizedHeight(24),
        width: normalizedWidth(24)
    }
})




