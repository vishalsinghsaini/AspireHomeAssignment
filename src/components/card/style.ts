import { normalizedHeight, normalizedWidth, moderateScale } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from '.';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    iconImage: {
        height: normalizedHeight(16),
        width: normalizedWidth(16),
        marginRight: normalizedWidth(6),
    },
    bullets: {
        height: normalizedHeight(8),
        width: normalizedWidth(8),
        borderRadius: moderateScale(8),
        marginHorizontal: normalizedWidth(2),
        marginVertical: normalizedHeight(2),
        backgroundColor: theme.colors.white,
    },
    shadow: {
        shadowColor: '#AAA',
        shadowOffset: {
            width: normalizedWidth(2),
            height: normalizedHeight(2),
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 8,
    },
    hideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        alignSelf: 'flex-end',
        width: normalizedWidth(151),
        height: normalizedHeight(45),
        borderTopRightRadius: moderateScale(6),
        borderTopLeftRadius: moderateScale(6),
        paddingBottom: normalizedHeight(16)
    },
    ml20: {
        marginLeft: normalizedWidth(24)
    },
    hideText: {
        fontSize: theme.fontSize.font12,
        fontWeight: 600,
        color: theme.colors.primaryGreen
    },
    cardContainer: {
        backgroundColor: theme.colors.primaryGreen,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        marginTop: -normalizedHeight(16),
        padding: 0,
        zIndex: 9999
    },
    cardNumber: {
        color: theme.colors.white,
        fontWeight: '500',
        fontSize: theme.fontSize.font14,
    }
})




