import React from 'react';
import {connect} from "react-redux";
import {IMessage, IMessages} from "../../interfaces/Interfaces";
import Message from "./Message";

interface IState{
    messages: IMessages;
}
interface IProps{
    messages: IMessages;
}

const Messages = (props: IProps) => {
    let messageOrder = 1;
    return (
        <div>
            <h2>Messages</h2>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">message Id</th>
                    <th scope="col">client Id</th>
                    <th scope="col">date</th>
                    <th scope="col">time</th>
                    <th scope="col">notes</th>
                    <th scope="col">record</th>
                </tr>
                </thead>
                <tbody>
                {props.messages.map((el: IMessage) => <Message key={el.id} message={el}
                                                      messageOrder={messageOrder++}/>)}

                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    messages: state.messages
})



export default connect(mapStateToProps)(Messages);