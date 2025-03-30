import { View, Text, Image, TouchableOpacity, Modal, TextInput, ActivityIndicator, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppTheme } from '@app-hooks/use-app-theme';
import { createStyleSheet } from './style';
import PopUpModal from '@components/popUpModal.tsx';
import { isAndroid, normalizedWidth } from '@theme/device/normalize';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@network/reducers/store';
import { useFetchCardsData } from '@network/api/hooks/fetch-cards';
import { setUserData } from '@network/reducers/home-reducer';
import { generateRandomCardNumber, generateRandomCVV, generateRandomExpiry, isValidCardName } from '@assets/constants';
import { useCreateCard } from '@network/api/hooks/create-card';

export const Home = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    const { userData } = useSelector((state: StoreType) => state.homeReducer);
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);
    const [cardName, setCardName] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const resetValues = () => {
        setCardName('');
        setError('');
        setModalVisible(false);
    }

    const fetchNewCardData = (trimmedName: string) => {
        const newCard = {
            name: trimmedName,
            cardNumber: generateRandomCardNumber(),
            expiry: generateRandomExpiry(),
            cvv: generateRandomCVV(),
        };
        useCreateCard(newCard).then(res => {
            if (res?.data) {
                dispatch(setUserData(res?.data))
            }
        }).catch(() => Alert.alert('Error creating card. Please try again')).finally(() => resetValues())
    }


    const handleAddCard = () => {
        const trimmedName = cardName.trim();

        if (!trimmedName) {
            setError('Card name is required');
            return;
        }

        if (!isValidCardName(trimmedName)) {
            setError('Name must contain only letters and spaces');
            return;
        }

        setIsLoading(true)

        // since there is no delay in api call added here just to show the loading state
        setTimeout(() => {
            setIsLoading(false)
            fetchNewCardData(trimmedName)
        }, 2000)

    };

    const openModal = () => setModalVisible(true)
    const getCardData = () => {
        useFetchCardsData().then(res => {
            if (res?.data) {
                dispatch(setUserData(res?.data))
            }
        })
    }

    const dismissModal = () => setModalVisible(false)
    useEffect(() => {
        getCardData()
    }, []);

    return (
        <>
            <View style={[styles.container, isAndroid() ? styles.pt32 : styles.pt4]}>
                <View style={[styles.titleContainer, styles.mb12]}>
                    <Text style={styles.title}>Debit Card</Text>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/Logo.png')}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.subtitle}>Available balance</Text>
                <View style={styles.currencyContainer}>
                    <View style={styles.symbolContainer}>
                        <Text style={styles.symbol}>S$</Text>
                    </View>
                    <Text style={styles.title}>
                        {userData?.availableBalance?.toLocaleString()}
                    </Text>
                </View>
                <PopUpModal />

            </View>

            {/* Fab Icon */}
            <TouchableOpacity style={styles.fabIcon} onPress={openModal} >
                <Text style={styles.addCard}>
                    Add new card
                </Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal visible={modalVisible} transparent animationType="slide" onDismiss={dismissModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Card</Text>
                        <TextInput
                            placeholder="Card Name"
                            value={cardName}
                            editable={!isLoading}
                            onChangeText={(text) => {
                                setCardName(text);
                                if (text.trim()) setError('');
                            }}
                            style={[styles.input, error && { borderColor: theme.colors.red }, isLoading && { color: theme.colors.blackOverlay }]}
                        />
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleAddCard}
                        >

                            {isLoading ? <ActivityIndicator
                                size="small"
                                color="#000"
                                style={{ marginRight: normalizedWidth(6), alignSelf: 'center' }}
                            /> : null}
                            <Text style={styles.submitButtonText}>Submit</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={resetValues}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};
