import { getBottomPadding } from '@assets/constants';
import { isAndroid, lineHeightScale, normalScale, verticalScale } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarstyle: {
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        borderTopRightRadius: theme.borderRadius.radius8,
        borderTopLeftRadius: theme.borderRadius.radius8,
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(1)
        },
        shadowOpacity: theme.opacity.opacity0p2,
        shadowRadius: theme.borderRadius.radius4,
        elevation: verticalScale(20),
        borderWidth: theme.borderWidth.borderWidth1,
        borderColor: theme.colors.borderColor,
    },
    icon: {
        width: normalScale(24),
        height: normalScale(24),
        marginTop: verticalScale(10),
    },
    label: {
        fontSize: theme.fontSize.font10,
        lineHeight: lineHeightScale(15),
        color: '#01D167',
    },
    color: {
        color: theme.colors.primaryBackgroundColor
    },
    display: {
        display: 'none'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: theme.colors.white,
        paddingVertical: verticalScale(8),
        paddingBottom: getBottomPadding(isAndroid() ? 8 : 0),
        shadowOpacity: theme.opacity.opacity0p1,
        shadowRadius: theme.borderRadius.radius2,
        elevation: verticalScale(4)
    },
    button: {
        marginHorizontal: normalScale(16),
    },
})




