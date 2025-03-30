import React, { useState } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';
import { StoreType } from '@network/reducers/store';
import { UserDataProps } from '@network/reducers/home-reducer';
import { normalizedWidth } from '@theme/device/normalize';

const { width } = Dimensions.get('screen');

export const CARD_WIDTH = (width - 48);
export const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

export interface CardProps {
    isCardFreezed: boolean
}

const Card = (props: CardProps) => {
    const { isCardFreezed = false } = props
    const { theme } = useAppTheme();
    const [showCardDetails, setShowCardDetails] = useState(true)
    const styles = createStyleSheet(theme);
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

    const renderCard = () => {
        return (
            <View style={[styles.cardContainer, styles.shadow]}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require("../../assets/images/AspireLogo.png")}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.card}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{userData?.name}</Text>
                    </View>
                    <View style={styles.cardDetails}>
                        {cardNumberDisplayRender(showCardDetails)}
                        <View style={styles.rowAlign}>
                            <Text style={styles.valid}>Thru: {userData?.cardValidThru}</Text>
                            <Text style={[styles.valid, { marginLeft: normalizedWidth(32) }]}>CVV: {(showCardDetails) ? userData?.cvv : "* * *"}</Text>
                        </View>
                    </View>

                    {isCardFreezed && (
                        <View style={styles.frozenOverlay}>
                            <Text style={styles.frozenText}>FROZEN</Text>
                        </View>
                    )}
                </View>
                <Image
                    style={styles.visaLogo}
                    source={require("../../assets/images/VisaLogo.png")}
                    resizeMode='contain'
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
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

            {renderCard()}
        </View>
    )
}

export default Card

