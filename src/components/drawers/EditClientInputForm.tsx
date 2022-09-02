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
        const updatedClient = {...props.client,
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
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}

                />

                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    {...register("lastName")}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Phone"
                    {...register("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Street Name"
                    {...register("streetName")}
                    error={!!errors.streetName}
                    helperText={errors.streetName?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Apartment"
                    {...register("apartment")}
                    error={!!errors.apartment}
                    helperText={errors.apartment?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Town/City"
                    {...register("town")}
                    error={!!errors.town}
                    helperText={errors.town?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="State"
                    {...register("usState")}
                    error={!!errors.usState}
                    helperText={errors.usState?.message}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Zip"
                    {...register("zip")}
                    error={!!errors.zip}
                    helperText={errors.zip?.message}
                />

                <input type="submit"/>
                <Button> Cancel </Button>
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