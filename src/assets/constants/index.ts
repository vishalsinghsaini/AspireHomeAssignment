import { Dimensions, Platform } from 'react-native';
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const getBottomPadding = (padding: number) => (Platform.OS === 'ios' ? padding + 40 : padding);



