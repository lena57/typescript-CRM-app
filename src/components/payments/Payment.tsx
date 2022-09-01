import React from 'react';
import {IPayment} from "../../interfaces/Interfaces";

interface IProps{
    payment: IPayment;
    paymentOrder: number;
}

const Payment = (props: IProps) => {
    return (
        <tr>
            <th scope="row">{props.paymentOrder}</th>
            <td>{props.payment.id}</td>
            <td>{props.payment.clientId}</td>
            <td>{props.payment.orderId}</td>
            <td>{props.payment.typePayment}</td>
            <td>{props.payment.total}</td>

        </tr>
    );
};

export default Payment;