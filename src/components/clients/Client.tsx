import React from 'react';
import {IClient} from "../../interfaces/Interfaces";
import Button from "@mui/material/Button";
import EditClientDrawer from "../drawers/EditClientDrawer";

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
                <td>{props.client.address.streetName + ', ' + props.client.address.apartment + ', ' +
                    props.client.address.town + ', ' + props.client.address.usState + ', ' +
                    props.client.address.zip}</td>

                <EditClientDrawer/>
            </tr>

    );
};


export default Client;