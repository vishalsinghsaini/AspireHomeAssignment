import { normalizedHeight, normalizedWidth, moderateScale } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from '.';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        marginTop: -normalizedHeight(90),
        marginBottom: normalizedHeight(20)
    },
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
        paddingBottom: normalizedHeight(20),
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
        borderRadius: moderateScale(10),
        marginTop: -normalizedHeight(20),
        padding: 0,
        zIndex: 1
    },
    cardNumber: {
        color: theme.colors.white,
        fontWeight: 500,
        fontSize: theme.fontSize.font14,
    },
    frozenOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // semi-transparent white
        justifyContent: 'center',
        alignItems: 'center',
    },
    frozenText: {
        color: theme.colors.black,
        fontWeight: 800,
        fontSize: theme.fontSize.font18,
    },
    logoContainer: {
        marginTop: normalizedHeight(24),
        height: normalizedHeight(21),
        marginRight: normalizedWidth(24),
        alignItems: 'flex-end'
    },
    logo: {
        width: normalizedWidth(74)
    },
    card: {
        height: CARD_HEIGHT - normalizedHeight(89),
        flexDirection: 'column',
        alignContent: 'space-between'
    },
    nameContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: normalizedWidth(24)
    },
    name: {
        color: theme.colors.white,
        fontWeight: 700,
        fontSize: theme.fontSize.font22
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalizedHeight(15)
    },
    valid: {
        color: theme.colors.white,
        fontWeight: 400,
        fontSize: theme.fontSize.font16
    },
    cardDetails: {
        flex: 1,
        marginLeft: normalizedWidth(24),
        alignContent: 'space-between'
    },
    visaLogo: {
        width: normalizedWidth(59),
        alignSelf: 'flex-end',
        right: normalizedWidth(24)
    }
})




