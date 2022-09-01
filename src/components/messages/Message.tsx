import React from 'react';
import {IMessage} from "../../interfaces/Interfaces";

interface IProps{
    message: IMessage,
    messageOrder: number,
}

const Message = (props: IProps) => {
    return (
        <tr>
            <th scope="row">{props.messageOrder}</th>
            <td>{props.message.id}</td>
            <td>{props.message.clientId}</td>
            <td>{props.message.date}</td>
            <td>{props.message.time}</td>
            <td>{props.message.notes}</td>
            <td>{props.message.record}</td>

        </tr>
    );
};

export default Message;