import React from 'react';
import {ICall} from "../../interfaces/Interfaces";

interface IProps{
    call: ICall;
    callOrder: number;
}

const Call = (props: IProps) => {
    return (
        <tr>
            <th scope="row">{props.callOrder}</th>
            <td>{props.call.id}</td>
            <td>{props.call.clientId}</td>
            <td>{props.call.date}</td>
            <td>{props.call.time}</td>
            <td>{props.call.callLength}</td>
            <td>{props.call.notes}</td>
            <td>{props.call.record}</td>

        </tr>
    );
};

export default Call;