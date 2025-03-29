import { getBottomPadding } from '@assets/constants';
import { isAndroid, lineHeightScale, normalizedHeight, normalizedWidth, moderateScale } from '@theme/device/normalize';
import { ThemeProps } from '@theme/theme';
import { StyleSheet } from 'react-native';

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
        backgroundColor: 'white',
    },
    shadow: {
        shadowColor: '#AAA',
        shadowOffset: {
            width: normalizedWidth(5),
            height: normalizedHeight(5),
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 8,
    },
    hideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        width: normalizedWidth(151),
        height: normalizedHeight(45),
        borderTopRightRadius: moderateScale(6),
        borderTopLeftRadius: moderateScale(6),
        paddingBottom: normalizedHeight(16)
    },
    hideText: {
        fontSize: theme.fontSize.font12,
        fontWeight: 600,
    }
})




