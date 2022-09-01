export interface IClients {
    [index: number]: IClient;
    map: (el: (el: IClient) => JSX.Element) => any;
}

export interface IOrders {
    [index: number]: IOrder;
    map: (el: (el: IOrder) => JSX.Element) => any;
}

export interface IPayments {
    [index: number]: IPayment;
    map: (el: (el: IPayment) => JSX.Element) => any;
}

export interface ICalls {
    [index: number]: ICall;
    map: (el: (el: ICall) => JSX.Element) => any;
}

export interface IMessages{
    [index: number]: IMessage;
    map: (el: (el: IMessage) => JSX.Element) => any;
}

export interface IMessage{
    id: string;
    clientId: string;
    date: string;
    time: string;
    notes: string;
    record: string;
}

export interface ICall {
    id: string;
    clientId: string;
    date: string;
    time: string;
    callLength: string;
    notes: string;
    record: string;
}

export interface IOrder {
    id: string;
    code: string;
    cost: number;
    service: string;
    quantity: number;
    price: number;
    discount: number;
    total: number;
    clientId: string;
}

export interface IPayment {
    id: string;
    clientId: string;
    orderId: string;
    total: number;
    typePayment: string;

}

export interface IClient {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    address: IAddress;

}

export interface IAddress {
    streetName: string;
    apartment: string;
    town: string;
    usState: string;
    zip: string;
}
