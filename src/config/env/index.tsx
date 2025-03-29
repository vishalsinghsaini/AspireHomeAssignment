import ActiveEnv from '@config/env/env.json';
import Prod from '@config/env/env.prod.json';
import { setEnv } from '@network/reducers/active-env-reducer';
import { store } from '@network/reducers/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getEnv() {
    let activeEnv = await AsyncStorage.getItem('envFlavour');
    if (!activeEnv) {
        await AsyncStorage.setItem('envFlavour', ActiveEnv.ENV);
        activeEnv = ActiveEnv.ENV;
    }
    switch (activeEnv) {
        case 'Production':
            return Prod;
        default:
            return Prod;
    }
}

export async function storeEnv() {
    const envConfig = await getEnv();
    store.dispatch(setEnv(envConfig));
}

export async function changeEnv(env: string) {
    await AsyncStorage.setItem('envFlavour', env);
    await storeEnv();
}

export const envList = ['Production'];
