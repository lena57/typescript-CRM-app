import React from 'react';
import {connect} from "react-redux";
import {IClient, IClients} from "../../interfaces/Interfaces";
import Client from "./Client";
import TemporaryDrawer from "../drawers/TemporaryDrawer";

interface IState{
    clients: IClients;
}

interface IProps{
    clients: IClients;
}

const Clients = (props: IProps) => {

    let clientOrder = 1;

    return (
        <div>
            <h2>Clients</h2>

            <TemporaryDrawer/>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">clientId</th>
                    <th scope="col">name</th>
                    <th scope="col">lastName</th>
                    <th scope="col">phone</th>
                    <th scope="col">address</th>
                </tr>
                </thead>
                <tbody>
            {props.clients.map((el:IClient) => <Client key={el.id} client={el}
                                                       clientOrder={clientOrder++}/>)}
                </tbody>
            </table>

        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    clients: state.clients
})

export default connect(mapStateToProps)(Clients);