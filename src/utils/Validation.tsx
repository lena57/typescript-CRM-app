import * as yup from 'yup';
export const clientValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must not exceed 20 characters'),
    lastName: yup.string()
        .required('Lastname is required')
        .min(2, 'Lastname must be at least 2 characters')
        .max(20, 'Lastname must not exceed 20 characters'),
    phone: yup.string()
        .required('Phone is required')
        .min(10, 'Phone must be 10 characters')
        .max(10, 'Phone must be 10 characters'),

    // apartment: yup.string()
    //     .oneOf([yup.ref('apartment'), null], 'Confirm Password does not match'),
    // address: yup.string()
    //     .oneOf([yup.ref('address'), null], 'Confirm Password does not match'),
    // city: yup.string()
    //     .oneOf([yup.ref('city'), null], 'city does not match'),
    // state: yup.string()
    //     .oneOf([yup.ref('state'), null], 'state does not match'),
    // zip: yup.string()
    //     .oneOf([yup.ref('zip'), null], 'Confirm Password does not match'),
});