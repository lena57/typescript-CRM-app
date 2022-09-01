import React from 'react';
import {IOrder, IOrders} from "../../interfaces/Interfaces";
import {connect} from "react-redux";
import Order from './Order';

interface IState{
    orders: IOrders;
}

interface IProps {
    orders: IOrders;
}

const Orders = (props: IProps) => {
    let orderOrder = 1;
    return (
        <div>
           <h2>Orders</h2>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">code</th>
                    <th scope="col">service</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                    <th scope="col">discount</th>
                    <th scope="col">total</th>
                    <th scope="col">clientId</th>
                </tr>
                </thead>
                <tbody>
                {props.orders.map((el: IOrder) => <Order key={el.id} order={el}
                                                           orderOrder={orderOrder++}/>)}

                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    orders: state.orders
})

export default connect(mapStateToProps)(Orders);