const initialState = {
    clients: [
        {
            id: '56',
            name: 'Sasha',
            lastName: 'Ningya',
            phone: '8528876787',
            address:
                {
                    streetName: '23 Second St',
                    apartment: '#89',
                    town: 'North Belerica',
                    usState: 'MA',
                    zip: '01755'
                }
        },
        {
            id: '5',
            name: 'Alexey',
            lastName: 'Popov',
            phone: '4568871111',
            address:
                {
                    streetName: '72 Main St',
                    apartment: '#9',
                    town: 'Reading',
                    state: 'MA',
                    zip: '01940'
                }
        }
    ],
    orders: [
        {
            id: '9',
            code: 'ORD-34', //order#
            cost: 12,
            service: 'print photo',
            quantity: 5,
            price: 20,
            discount: 2,
            total: 98,
            clientId: '56',
        }
    ],
    payments: [
        {
            id: '89',
            clientId: '56',
            orderId: '9',
            typePayment: 'cash',
            total: 98,
        }
    ],
    calls: [
        {
            id: '1',
            clientId: '56',
            date: 'Aug 23, 2022',
            time: '3:56pm',
            callLength: '4:03',
            notes: 'client satisfied',
            record: 'record',
        }
    ],
    messages: [
        {
            id: '11',
            clientId: '56',
            date: 'Aug 31, 2022',
            time: '8:56am',
            notes: 'client left feedback',
            record: 'record',
        }
    ]

}

function reducers(state = initialState, action: any) {
    switch (action.type) {
        case 'save':
            return {
                ...state,
                clients: [...state.clients, action.payload]
            };
        case 'update':
            const newClients = state.clients.map(el => el.id === action.payload.id ? action.payload : el)
            return {
                ...state,
                clients: [...newClients]
            };
        case 'set':
            return state;

        default:
            return state;
    }
    console.log(state.clients)
}

export default reducers;




// const reducers = {
//     save(state: any, { payload }: any) {
//         return {
//             ...state,
//             ...payload,
//         };
//     },
//
//     set(state: any, { payload }: any) {
//         return payload;
//     },
// };
//
// export default reducers;