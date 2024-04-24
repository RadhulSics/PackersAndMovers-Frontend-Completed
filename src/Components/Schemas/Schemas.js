import * as yup from "yup";

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol

export const packersRegSchema  = yup.object().shape({ 
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    gender: yup.string().required("Required"),
    contact: yup.string().min(10,"Phone number must be a 10 digit number").max(10,"Phone number must be a 10 digit number").required("Required"),
    city: yup.string().min(2,"Please enter a valid address"),          
    district: yup.string().min(2,"Please enter a valid address"),          
    pincode: yup.number().min(100000,"Pincode must be a 6 digit number").max(999999,"Pincode must be a 6 digit number").positive().integer(),
})

export const moversRegSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    regno: yup
    .string()
    .min(10, "Enter minimum 10 characters")
    .matches(/^[A-Z]{4}\d{6}$/, 'Invalid format. Sample Format - ABCD123456.')
    .required("Required"),
    aadhar: yup.string().min(12,"Aadhaar number must be a 12 digit number").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    contact: yup.string().min(10,"Phone number must be a 10 digit number").max(10,"Phone number must be a 10 digit number").required("Required"),
    city: yup.string().min(2,"Please enter a valid address"),          
    district: yup.string().min(2,"Please enter a valid address"),          
    pincode: yup.number().min(100000,"Pincode must be a 6 digit number").max(999999,"Pincode must be a 6 digit number").positive().integer(),
    email: yup.string().email("Please enter a valid email").required("Required"),

})

export const forgotPasswordScheme  = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
})


export const luggageSchema  = yup.object().shape({
    
      fromcity: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      fromlmark: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      fromstreet:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      fromdistrict:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      fromhname:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      tocity: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      tolmark:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      todistrict:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      tostreet:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      tohname:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
      boxes:yup.number().positive('Enter positive number'),
      vehicle:yup.string(),
      weight:yup.number().positive(),
      distance:yup.number().required("Required"),
      comments:yup.string(),
      date:yup.string().required("Required"),
      time:yup.string().required("Required"),
      type:yup.string().required("Required"),
      godownDays:yup.number().positive()
})

export const paymentSchema  = yup.object().shape({
    paymenttype:yup.string().required("Required"),
    paymentStatus:yup.boolean().required('Required')
})


export const BookingSchema  = yup.object().shape({
    cardHolderName:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    cardNo:yup.number().min(1000000000000000,"Card number must be minimum 16 digit number").max(9999999999999999, "Card number must be a 16-digit number").required("Required"),
    cvv:yup.number().min(100,"CVV number must be minimum 3 digit number").max(999, "CVV number must be a 3-digit number").required("Required"),
    month:yup.string().required("Required"),
    year:yup.string().required("Required"),
})

export const driverRegSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    gender: yup.string().required("Required"),
    contact: yup.string().min(10,"Phone number must be a 10 digit number").max(10,"Phone number must be a 10 digit number").required("Required"),
    licenceNo: yup.string().min(2,"Please enter a valid address").required("Required"),          
    mid: yup.string(),          
})



