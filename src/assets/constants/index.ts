import { Dimensions, Platform } from 'react-native';
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const getBottomPadding = (padding: number) => (Platform.OS === 'ios' ? padding + 40 : padding);

export const generateRandomCardNumber = () => {
    return Array.from({ length: 4 }, () =>
        Math.floor(1000 + Math.random() * 9000)
    ).join(' ');
};

export const generateRandomExpiry = () => {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = 25 + Math.floor(Math.random() * 5);
    return `${month}/2${year}`;
};

export const generateRandomCVV = () => {
    return Math.floor(100 + Math.random() * 900).toString();
};

export const isValidCardName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name.trim());
};



