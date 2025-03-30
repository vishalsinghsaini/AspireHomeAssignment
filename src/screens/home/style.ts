import { screenWidth } from '@assets/constants';
import { lineHeightScale, moderateScale, normalizedHeight, normalizedWidth } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primaryColor,
        flex: 1,
    },
    pt4: {
        paddingTop: normalizedHeight(4),
    },
    pt32: {
        paddingTop: normalizedHeight(32),
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
        alignItems: 'center',
        paddingHorizontal: normalizedWidth(24)
    },
    mb12: {
        marginBottom: normalizedHeight(12)
    },
    subtitle: {
        fontSize: theme.fontSize.font14,
        color: theme.colors.white,
        fontWeight: 400,
        marginBottom: normalizedHeight(10),
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
    },
    fabIcon: {
        position: 'absolute',
        bottom: normalizedHeight(90),
        right: normalizedWidth(10),
        alignSelf: 'flex-end',
        backgroundColor: theme.colors.primaryGreen,
        paddingVertical: normalizedHeight(4),
        paddingHorizontal: normalizedHeight(20),
        borderRadius: moderateScale(50),
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: normalizedWidth(2),
            height: normalizedHeight(4),
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: theme.colors.white,
        width: screenWidth * 0.85,
        borderRadius: moderateScale(12),
        paddingHorizontal: normalizedWidth(20),
        paddingVertical: normalizedHeight(20),
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: theme.fontSize.font18,
        fontWeight: 800,
        marginBottom: normalizedHeight(12),
    },
    input: {
        borderWidth: theme.borderWidth.borderWidth1,
        borderColor: '#ddd',
        borderRadius: moderateScale(8),
        width: '100%',
        paddingHorizontal: normalizedWidth(12),
        marginBottom: normalizedHeight(16),
        paddingVertical: normalizedHeight(12),
    },
    submitButton: {
        backgroundColor: theme.colors.primaryGreen,
        paddingVertical: normalizedHeight(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: moderateScale(8),
        marginBottom: normalizedHeight(10),
    },
    submitButtonText: {
        color: theme.colors.white,
        textAlign: 'center',
    },
    cancelButton: {
        paddingVertical: normalizedHeight(8),
    },
    errorText: {
        color: theme.colors.red,
        alignSelf: 'flex-start',
        marginTop: -normalizedHeight(10),
        marginBottom: normalizedHeight(10),
        marginLeft: normalizedWidth(5),
        fontSize: theme.fontSize.font12
    },
    addCard: {
        fontSize: theme.fontSize.font16,
        fontWeight: 600,
        color: theme.colors.white
    }
})




