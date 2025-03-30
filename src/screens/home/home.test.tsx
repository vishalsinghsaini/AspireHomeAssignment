import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as constants from '@assets/constants';
import { Alert } from 'react-native';
import { Home } from '.';
import * as fetchCardsHook from '@network/api/hooks/fetch-cards';
import * as createCardHook from '@network/api/hooks/create-card';

jest.mock('@app-hooks/use-app-theme', () => ({
    useAppTheme: () => ({
        theme: { colors: { red: 'red', blackOverlay: 'grey' } },
    }),
}));

jest.mock('@network/api/hooks/create-card', () => ({
    useCreateCard: jest.fn(),
}));

jest.mock('@assets/constants', () => ({
    generateRandomCardNumber: jest.fn(() => '1111 2222 3333 4444'),
    generateRandomCVV: jest.fn(() => '999'),
    generateRandomExpiry: jest.fn(() => '12/30'),
    isValidCardName: jest.fn(() => true),
}));

jest.spyOn(Alert, 'alert');

const mockStore = configureStore([]);

const initialState = {
    homeReducer: {
        userData: { availableBalance: 2000 },
    },
};

const renderComponent = (state = initialState) => {
    const store = mockStore(state);
    return render(
        <Provider store={store}>
            <Home />
        </Provider>
    );
};

describe('Home Screen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders Debit Card title', () => {
        const { getByText } = renderComponent();
        expect(getByText('Debit Card')).toBeTruthy();
    });

    it('opens modal when "Add new card" button is pressed', () => {
        const { getByText, getByPlaceholderText } = renderComponent();
        fireEvent.press(getByText('Add new card'));
        expect(getByPlaceholderText('Card Name')).toBeTruthy();
    });

    it('shows error when card name is empty', () => {
        const { getByText } = renderComponent();
        fireEvent.press(getByText('Add new card'));
        fireEvent.press(getByText('Submit'));
        expect(getByText('Card name is required')).toBeTruthy();
    });

    it.skip('shows error when card name is invalid', () => {
        constants.isValidCardName.mockReturnValue(false);
        const { getByText, getByPlaceholderText } = renderComponent();
        fireEvent.press(getByText('Add new card'));
        fireEvent.changeText(getByPlaceholderText('Card Name'), '1234');
        fireEvent.press(getByText('Submit'));
        expect(getByText('Name must contain only letters and spaces')).toBeTruthy();
    });

    it('shows loader and calls API on valid card name', async () => {
        const createCardSpy = jest.spyOn(createCardHook, 'useCreateCard');
        createCardSpy.mockResolvedValue({
            data: {
                "availableBalance": 3000,
                "name": "Mark Henry",
                "cardNumber": "5647341124132020",
                "cvv": 456,
                "expiryYear": 2020,
                "expiryDate": 12,
                "type": "visa",
                "spendingLimit": 5000,
                "spendingLimitUsed": 345,
                "cardFreeze": false,
                "cardValidThru": "12/20"
            },
            status: 200,
            message: 'Success',
            statusCode: 200,
            isError: false,
            isSuccess: true,
            headers: {},
            errorCode: null,
        });

        const { getByText, getByPlaceholderText } = renderComponent();

        fireEvent.press(getByText('Add new card'));
        fireEvent.changeText(getByPlaceholderText('Card Name'), 'Vishal');

        await act(async () => {
            fireEvent.press(getByText('Submit'));
            jest.runAllTimers();
        });

        expect(createCardSpy).toHaveBeenCalled();
    });


    it('closes modal when cancel button is pressed', () => {
        const { getByText, queryByPlaceholderText } = renderComponent();
        fireEvent.press(getByText('Add new card'));
        fireEvent.press(getByText('Cancel'));
        expect(queryByPlaceholderText('Card Name')).toBeNull();
    });

    it('calls fetchCardData on mount', async () => {
        const fetchCardDataMock = jest.spyOn(fetchCardsHook, 'useFetchCardsData');
        fetchCardDataMock.mockResolvedValue({
            data: {
                "availableBalance": 3000,
                "name": "Mark Henry",
                "cardNumber": "5647341124132020",
                "cvv": 456,
                "expiryYear": 2020,
                "expiryDate": 12,
                "type": "visa",
                "spendingLimit": 5000,
                "spendingLimitUsed": 345,
                "cardFreeze": false,
                "cardValidThru": "12/20"
            },
            status: 200,
            message: 'Success',
            statusCode: 200,
            isError: false,
            isSuccess: true,
            headers: {},
            errorCode: null,
        });

        await act(async () => {
            renderComponent();
        });

        expect(fetchCardDataMock).toHaveBeenCalled();
    });

    it('shows alert on create card API error', async () => {
        const createCardSpy = jest.spyOn(createCardHook, 'useCreateCard');
        createCardSpy.mockRejectedValue('API Error');

        const { getByText, getByPlaceholderText } = renderComponent();

        fireEvent.press(getByText('Add new card'));
        fireEvent.changeText(getByPlaceholderText('Card Name'), 'Vishal');

        await act(async () => {
            fireEvent.press(getByText('Submit'));
            jest.runAllTimers(); /
        });

        expect(Alert.alert).toHaveBeenCalledWith('Error creating card. Please try again');
    });

});
