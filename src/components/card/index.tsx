import React, { useState } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';
import { StoreType } from '@network/reducers/store';
import { UserDataProps } from '@network/reducers/home-reducer';
import { normalizedWidth } from '@theme/device/normalize';

const { width } = Dimensions.get('screen');

export const CARD_WIDTH = (width - 48);  //Ensures that the currency notation and the card's left end align just like the mock up
export const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const Card = () => {
    const { theme } = useAppTheme();
    const [showCardDetails, setShowCardDetails] = useState(true)
    const styles = createStyleSheet(theme);
    let cardValidThru = "12/20";//selectCardValidThru;
    let nameOnCard = "Mark Henry";//selectNameOnCard;
    const { userData }: { userData: UserDataProps } = useSelector((state: StoreType) => state.homeReducer);

    const cardNumberDisplayRender = (cardDisplayFlag: boolean) => {
        if (!(cardDisplayFlag != null && userData?.cardNumber != null)) {
            return
        }
        if (cardDisplayFlag)
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardNumber}>{userData?.cardNumber?.substring(0, 4)}</Text>
                    <Text style={[styles.cardNumber, styles.ml20]}>{userData?.cardNumber?.substring(4, 8)}</Text>
                    <Text style={[styles.cardNumber, styles.ml20]}>{userData?.cardNumber?.substring(8, 12)}</Text>
                    <Text style={[styles.cardNumber, styles.ml20]}>{userData?.cardNumber?.substring(12, 16)}</Text>
                </View>
            );
        else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {[0, 1, 2].map((index) => (
                        <View
                            key={index}
                            style={{
                                marginLeft: normalizedWidth(index === 0 ? -4 : 20),
                                flexDirection: 'row',
                                marginRight: normalizedWidth(index === 2 ? 20 : 0),
                            }}
                        >
                            {Array(4)
                                .fill(0)
                                .map((_, bulletIndex) => (
                                    <View key={bulletIndex} style={styles.bullets} />
                                ))}
                        </View>
                    ))}
                    <Text style={styles.cardNumber}>
                        {userData?.cardNumber?.substring(12, 16)}
                    </Text>
                </View>
            );
        }
    };

    return (
        <View style={{ backgroundColor: 'transparent', width: CARD_WIDTH, height: CARD_HEIGHT + 32, marginTop: -90 }}>
            {/* A view for the card image : Width is calculated as a percentage of the screen width as per shared design, height is calculated such as to maintain the aspect ratio */}
            <TouchableOpacity style={styles.hideContainer}
                onPress={() => setShowCardDetails(prev => !prev)}
            >
                {/* A view for the "Show Card Number Button" */}
                <Image
                    style={styles.iconImage}
                    source={(showCardDetails) ? require("../../assets/images/eyeClosed.png") : require("../../assets/images/eyeOpen.png")}
                    resizeMode='contain'
                />
                <Text style={styles.hideText}>{showCardDetails ? "Hide card number" : "Show card number"} </Text>
            </TouchableOpacity>
            <View style={[styles.cardContainer, styles.shadow]}>
                {/* A view for the actual card */}
                <View style={{ marginTop: 24, height: 21, marginRight: 24, alignItems: 'flex-end' }}>
                    {/* View For Top Logo */}
                    <Image
                        style={{ width: 74 }}
                        source={require("../../assets/images/AspireLogo.png")}
                        resizeMode='contain'
                    />
                </View>
                <View style={{ height: CARD_HEIGHT - 89, flexDirection: 'column', alignContent: 'space-between' }}>
                    {/* Value of 89 is calculated as (margin top + height) of Aspire logo at top; +  (margin bottom + height) of VISA logo at the bottom */}
                    {/* View for card details like name, number, date */}
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 24 }}>
                        {/* View for User Name */}
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 22 }}>{nameOnCard}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 24, alignContent: 'space-between' }}>
                        {/* View for card number valid thru and cvv */}
                        <View style={{ height: 17, flex: 1 }}>
                            {/* View for Card Number */}
                            {cardNumberDisplayRender(showCardDetails)}
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* View for valid thru and cvv */}
                            <Text style={{ color: 'white', fontWeight: '400', fontSize: 16 }}>Thru: {cardValidThru}</Text>
                            <Text style={{ color: 'white', fontWeight: '400', fontSize: 15, marginLeft: 10 }}>CVV: {(showCardDetails) ? userData?.cvv : "* * *"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 24, marginRight: 24, height: 20, alignItems: 'flex-end' }}>
                    {/* View for bottom VISA logo */}
                    <Image
                        style={{ width: 59 }}
                        source={require("../../assets/images/VisaLogo.png")}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'white', width: width, height: 85, borderTopRightRadius: 18, borderTopLeftRadius: 18, marginBottom: 0, marginTop: -85, marginLeft: -24, marginRight: -24 }} />
        </View>
    )
}

export default Card

