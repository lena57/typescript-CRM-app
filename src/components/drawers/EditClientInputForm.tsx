import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
//import "./styles.css";
import TextField from "@mui/material/TextField";
import {clientValidationSchema} from "../../utils/Validation";
import {connect} from "react-redux";
import {IClient} from "../../interfaces/Interfaces";
import Button from "@mui/material/Button";

interface IProps {
    client: IClient;
    editClient: (updatedClient: IClient) => void;
    toggleDrawer1: () => void;
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

const EditClientInputForm = (props: IProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({
        defaultValues: {
            id: props.client.id,
            name: props.client.name,
            lastName: props.client.lastName,
            phone: props.client.phone,
            streetName: props.client.address.streetName,
            apartment: props.client.address.apartment,
            town: props.client.address.town,
            usState: props.client.address.usState,
            zip: props.client.address.zip,
        },
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(clientValidationSchema)
    });
    console.log(props)

    const onSubmit = handleSubmit((data) => {
        const updatedClient = {
            ...props.client,
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

        props.editClient(updatedClient);
        props.toggleDrawer1();

        console.log(updatedClient);
    });

    return (
        <div className="App">
            <h1>Edit Client info</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
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
                        color="secondary" focused
                        {...register("zip")}
                        error={!!errors.zip}
                        helperText={errors.zip?.message}
                    />
                </div>

                <Button variant="contained" color="primary" type="submit">Save</Button>
                <Button variant="contained" color="error" onClick={props.toggleDrawer1}> Cancel </Button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return ({
        editClient: (updatedClient: IClient) => dispatch({type: 'EDIT', payload: updatedClient}),
    });
}

export default connect(null, mapDispatchToProps)(EditClientInputForm);