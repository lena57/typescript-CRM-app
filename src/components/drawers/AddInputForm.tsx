import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
//import "./styles.css";
import TextField from "@mui/material/TextField";
import {clientValidationSchema} from "../../utils/Validation";
import {v4 as uuidv4} from 'uuid';
import {connect} from "react-redux";
import {IClient} from "../../interfaces/Interfaces";
import Button from "@mui/material/Button";

interface IProps {
    addNewClient: (newClient: IClient) => void;
    toggleDrawer: () => void;
}

type FormValues = {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    streetName: string;
    apartment: string;
    town: string;
    usState: string;
    zip: string;
};

const AddInputForm = (props: IProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(clientValidationSchema)
    });

    const onSave = handleSubmit((data) => {
        const newClient = {
            id: uuidv4(),
            name: data.name,
            lastName: data.lastName,
            phone: data.phone,
            address:
                {
                    streetName: data.streetName,
                    apartment: data.apartment,
                    town: data.town,
                    usState: data.usState,
                    zip: data.zip
                }
        }

        props.addNewClient(newClient);
        props.toggleDrawer();
        console.log(newClient);
    });

    return (
        <div className="App">
            <h1>Add New Client</h1>
            <form onSubmit={onSave}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        color="success" focused
                        defaultValue=""
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        color="success" focused
                        defaultValue=""
                        {...register("lastName")}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Phone"
                        color="success" focused
                        defaultValue=""
                        {...register("phone")}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Street Name"
                        color="success" focused
                        defaultValue=""
                        {...register("streetName")}
                        error={!!errors.streetName}
                        helperText={errors.streetName?.message}
                    />

                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Apartment"
                        color="success" focused
                        defaultValue=""
                        {...register("apartment")}
                        error={!!errors.apartment}
                        helperText={errors.apartment?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Town/City"
                        color="success" focused
                        defaultValue=""
                        {...register("town")}
                        error={!!errors.town}
                        helperText={errors.town?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="State"
                        color="success" focused
                        defaultValue=""
                        {...register("usState")}
                        error={!!errors.usState}
                        helperText={errors.usState?.message}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Zip"
                        color="success" focused
                        defaultValue=""
                        {...register("zip")}
                        error={!!errors.zip}
                        helperText={errors.zip?.message}
                    />
                </div>

                <Button variant="contained" color="success" type="submit">Save</Button>
                <Button variant="contained" color="error" onClick={props.toggleDrawer}> Cancel </Button>
            </form>
        </div>
    );
}


const mapDispatchToProps = (dispatch: any) => {
    return ({
        addNewClient: (newClient: any) => dispatch({type: 'CREATE', payload: newClient}),
    });
}

export default connect(null, mapDispatchToProps)(AddInputForm);