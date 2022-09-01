import React from 'react';
import {ICall, ICalls} from "../../interfaces/Interfaces";
import {connect} from "react-redux";
import Call from "./Call";

interface IProps {
    calls: ICalls;
}

interface IState {
    calls: ICalls;
}

const Calls = (props: IProps) => {
    let callOrder = 1;

    return (
        <div>
            <h2>Calls</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">call Id</th>
                    <th scope="col">client Id</th>
                    <th scope="col">date</th>
                    <th scope="col">time</th>
                    <th scope="col">call Length</th>
                    <th scope="col">notes</th>
                    <th scope="col">record</th>
                </tr>
                </thead>
                <tbody>
                {props.calls.map((el: ICall) => <Call key={el.id} call={el}
                                                               callOrder={callOrder++}/>)}

                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    calls: state.calls,
})

export default connect(mapStateToProps)(Calls);