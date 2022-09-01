import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
//import "./styles.css";
import TextField from "@mui/material/TextField";
import {clientValidationSchema} from "../../utils/Validation";
import {v4 as uuidv4} from 'uuid';
import {connect} from "react-redux";
import {IClient} from "../../interfaces/Interfaces";

interface IProps {
    addNewClient: (newClient: IClient) => void;
    toggleDrawer: () => void;
}

type FormValues = {
    name: string;
    lastName: string;
    phone: string;
    streetName: string;
    apartment: string;
    town: string;
    usState: string;
    zip: string;
};

function InputForm(props: IProps) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(clientValidationSchema)
    });
    const onSubmit = handleSubmit((data) => {
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
            <form onSubmit={onSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                    {...register("lastName")}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Phone"
                    defaultValue=""
                    {...register("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Street Name"
                    defaultValue=""
                    {...register("streetName")}
                    error={!!errors.streetName}
                    helperText={errors.streetName?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Apartment"
                    defaultValue=""
                    {...register("apartment")}
                    error={!!errors.apartment}
                    helperText={errors.apartment?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Town/City"
                    defaultValue=""
                    {...register("town")}
                    error={!!errors.town}
                    helperText={errors.town?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="State"
                    defaultValue=""
                    {...register("usState")}
                    error={!!errors.usState}
                    helperText={errors.usState?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Zip"
                    defaultValue=""
                    {...register("zip")}
                    error={!!errors.zip}
                    helperText={errors.zip?.message}
                />

                <input type="submit"/>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    addNewClient: (newClient: any) => dispatch({type: 'CREATE', payload: newClient})
})

export default connect(null, mapDispatchToProps)(InputForm)