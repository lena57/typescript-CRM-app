import React from 'react';
import Payment from "./Payment";
import {IPayment, IPayments} from "../../interfaces/Interfaces";
import {connect} from "react-redux";

interface IState{
    payments: IPayments;
}

interface IProps{
    payments: IPayments;
}


const Payments = (props: IProps) => {
    let paymentOrder = 1;
    return (
        <div>
            <h2>Payments</h2>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">payment Id</th>
                    <th scope="col">client Id</th>
                    <th scope="col">order Id</th>
                    <th scope="col">type Of Payment</th>
                    <th scope="col">total</th>
                </tr>
                </thead>
                <tbody>
                {props.payments.map((el: IPayment) => <Payment key={el.id} payment={el}
                                                         paymentOrder={paymentOrder++}/>)}

                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    payments: state.payments
})

export default connect(mapStateToProps)(Payments);