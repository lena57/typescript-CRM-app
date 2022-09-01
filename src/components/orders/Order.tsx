import React from 'react';
import {IOrder} from "../../interfaces/Interfaces";

interface IProps{
    order: IOrder;
    orderOrder: number;
}

const Order = (props: IProps) => {
    return (
        <tr>
            <th scope="row">{props.orderOrder}</th>
            <td>{props.order.code}</td>
            <td>{props.order.service}</td>
            <td>{props.order.quantity}</td>
            <td>{props.order.price}</td>
            <td>{props.order.discount}</td>
            <td>{props.order.total}</td>
            <td>{props.order.clientId}</td>
        </tr>
    );
};

export default Order;