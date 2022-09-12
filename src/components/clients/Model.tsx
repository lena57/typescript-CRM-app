import {Effect, history, Reducer} from '@umijs/max';

import {
    // generateFakeClients, importUploadCsvQuery,
    queryClientCreate,
    // queryClientDeleteById,
    // queryClientGetBillingAddress,
    // queryClientGetDefaultAddress,
    // queryClientGetFinancialInfoById,
    // queryClientGetInfoById,
    // queryClientGetStats,
    // queryClientSearch,
    // queryClientUpdateById,
} from '../clients/queries/queries';
//import defaultReducers from '@/utils/defaultReducers';
import {get} from 'lodash';
import reducers from "../../redux/reducers";

export interface IState {
}

export interface ClientModelType {
    namespace: string;
    state: IState;
    effects: {
        [key: string]: Effect;
    };
    reducers: {
        save: Reducer<IState>;
    };
}

const ClientModel: ClientModelType = {
    namespace: 'Client',

    state: {},

    effects: {
        * create({payload}, {call, put}) {
            const createResult = yield call(queryClientCreate, payload);
            if (!(createResult instanceof Error)) {
                yield put({type: 'search'});
                yield put({type: 'getStats'});
                yield put({type: 'Sidepanel/close'});
                const clientId = get(createResult, 'payload.clientId');
                history.push(`/client/${clientId}`);
            }
        },
        //
        // *getById({ payload }, { call, put }) {
        //     yield put({ type: 'save', payload: { Client: {} } });
        //     const data = yield call(queryClientGetInfoById, payload);
        //     yield put({ type: 'save', payload: { Client: data.payload } });
        // },

        // *updateById({ payload }, { call, put }) {
        //     const updateResult = yield call(queryClientUpdateById, payload);
        //     const place = get(payload, 'place', '');
        //
        //     if (!(updateResult instanceof Error)) {
        //         yield put({ type: 'Sidepanel/close' });
        //         yield put({
        //             type: 'search',
        //             payload: payload.queryParams,
        //         });
        //         yield put({
        //             type: 'getInfoById',
        //             payload: payload.clientId,
        //         });
        // использовалось в клиенте для измениения себя
        // Находясь в клиенте не надо обновлять ордер
        // yield put({type: 'Order/getById', payload: payload.orderId});
        //}
        //
        // if (place === 'OrderView') {
        //         yield put({ type: 'Order/getById', payload: payload.orderId });
        //     }
        //
        //     if (payload.place === 'EstimateView') {
        //         yield put({ type: 'Estimate/estimateGetById', payload: payload.estimateId });
        //     }
        //
        //     if (payload.place === 'InvoiceView') {
        //         yield put({ type: 'Invoice/getById', payload: payload.invoiceId });
        //     }
        //
        //     if (payload.place === 'PaymentView') {
        //         yield put({ type: 'Payment/paymentGetById', payload: payload.paymentId });
        //     }
        // },
        //
        // *getInfoById({ payload }, { call, put }) {
        //     yield put({ type: 'save', payload: {} });
        //     const data = yield call(queryClientGetInfoById, payload);
        //     yield put({ type: 'save', payload: { ...data.payload } });
        // },
        //
        // *getFinancialInfoById({ payload }, { call, put }) {
        //     const data = yield call(queryClientGetFinancialInfoById, payload);
        //     yield put({
        //         type: 'save',
        //         payload: { financialInfo: data.payload },
        //     });
        //     console.log('data.payload', data.payload);
        // },

        // *getDefaultAddressByClientId({ payload }, { call, put }) {
        //     yield put({ type: 'save', payload: {} });
        //     const data = yield call(queryClientGetDefaultAddress, payload);
        //     yield put({ type: 'save', payload: { defaultAddress: data.payload } });
        // },
        //
        // *getBillingAddressByClientId({ payload }, { call, put }) {
        //     yield put({ type: 'save', payload: {} });
        //     const data = yield call(queryClientGetBillingAddress, payload);
        //     yield put({ type: 'save', payload: { billingAddress: data.payload } });
        // },

        // *search({ payload }, { call, put }) {
        //     const data = yield call(queryClientSearch, payload);
        //     yield put({
        //         type: 'save',
        //         payload: {
        //             items: get(data, 'payload.items'),
        //             pager: get(data, 'payload.pager'),
        //         },
        //     });
        // },
        //
        // *getStats(_, { call, put }) {
        //     const data = yield call(queryClientGetStats);
        //     yield put({
        //         type: 'save',
        //         payload: { stats: data.payload },
        //     });
        // },
        //
        // *deleteById({ payload }, { call, put }) {
        //     yield call(queryClientDeleteById, payload.clientId);
        //     yield put({ type: 'search', payload: payload.queryParams });
        //     yield put({ type: 'getStats' });
        // },
        // //
        // *generateFakeClients({ payload }, { call }) {
        //     yield call(generateFakeClients, payload);
        // },
        //
        // *importUploadCsv({ payload }, { call }) {
        //     yield call(importUploadCsvQuery, payload);
        // },

        // *hangUpPhone(_: any, { call, put }) {
        //   // @ts-ignore
        //   Device.disconnectAll();
        //   yield put({
        //     type: 'deleteCurrentCall',
        //     payload: {},
        //   });
        // },

        // *callClient({ payload }, { call, put }) {
        //   const userId = get(payload, 'userId', '');
        //   const userPhone = get(payload, 'userPhone', '');
        //   const data = yield call(generateTwilioAccessToken, userPhone);
        //   // // Начинаем настройку клиента Twilio
        //   // Device.setup(data.payload);
        //   // // Аналог Then для функции setup
        //   // yield put({
        //   //   type: 'save',
        //   //   payload: { currentCall: { userId } },
        //   // });
        //   // // @ts-ignore
        //   // Device.ready(function (device) {
        //   //   // Twilio клиент настроен успешно
        //   //   const params = { phoneNumber: payload };
        //   //   // Начинаем звонить
        //   //   // @ts-ignore
        //   //   Device.connect(params);
        //   //   // Аналог Then для функции connect
        //   //   // @ts-ignore
        //   //   Device.connect(function (connection) {
        //   //     // Пошли гудки
        //   //   });
        //   // });
        //   // // Аналог Catch для функции setup
        //   // // @ts-ignore
        //   // Device.error(function (error) {
        //   //   // Ошибка функции setup
        //   // });
        // },
        //
        // *hangUpCallClient(_: any, { call, put }) {
        //   // @ts-ignore
        //   Device.disconnectAll();
        //   yield put({
        //     type: 'deleteCurrentCall',
        //     payload: {},
        //   });
        // },
        //
        //     *reset(_, { put }) {
        //         yield put({ type: 'set', payload: {} });
        //     },
        // },

        reducers: {
            ...reducers,
        },
    }
}
    export default ClientModel;
