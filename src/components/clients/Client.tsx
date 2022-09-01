import React from 'react';
import {IClient} from "../../interfaces/Interfaces";

interface IProps{
    client: IClient;
    clientOrder: number;
}

const Client = (props: IProps) => {
    return (
            <tr>
                <th scope="row">{props.clientOrder}</th>
                <td>{props.client.id}</td>
                <td>{props.client.name}</td>
                <td>{props.client.lastName}</td>
                <td>{props.client.phone}</td>
                <td>{props.client.address.streetName + ' ' + props.client.address.apartment + ' ' +
                    props.client.address.town + ' ' + props.client.address.usState + ' ' +
                    props.client.address.zip}</td>
            </tr>

    );
};

export default Client;