import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import EditClientInputForm from "./EditClientInputForm";
import {IClient} from "../../interfaces/Interfaces";

interface IProps{
    client: IClient;
}

export default function EditClientDrawer(props: IProps) {
    const [state, setState] = React.useState(false);

    const toggleDrawer1 = () => {
        setState(!state);
    };

    return (
        <div>
            <React.Fragment key={"right"}>
                <Button variant="contained" color="secondary" onClick={toggleDrawer1}>Edit Client info</Button>
                <Drawer
                    anchor={"right"}  // вот эта штука отвечает за сторону, из которой выплывает drawer
                    open={state}  // эта штука открывает/закрывает модалку
                    onClose={toggleDrawer1}
                >

                    <EditClientInputForm toggleDrawer1={toggleDrawer1} client={props.client}/>


                </Drawer>
            </React.Fragment>
        </div>
    );
}