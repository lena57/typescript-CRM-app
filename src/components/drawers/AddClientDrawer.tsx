import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddInputForm from "./AddInputForm";

export default function AddClientDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(!state);
    };

    return (
        <div>
            <React.Fragment key={"right"}>
                <Button variant="contained" color="success" onClick={toggleDrawer}>Add New Client</Button>
                <Drawer
                    anchor={"right"}  // вот эта штука отвечает за сторону, из которой выплывает drawer
                    open={state}  // эта штука открывает/закрывает модалку
                    onClose={toggleDrawer}
                >

                    <AddInputForm toggleDrawer={toggleDrawer}/>

                </Drawer>
            </React.Fragment>
        </div>
    );
}