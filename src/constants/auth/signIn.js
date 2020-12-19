import * as Yup from 'yup';

const inputs = [
  {
    name: "email",
    label: "E-mail",
    inputType: "text"
  },
  {
    name: "password",
    label: "Password",
    inputType: "password"
  }
];

const initialValues = {
  email: "",
  password: ""
};

const validationSchema =
  Yup.object().shape({
    email: Yup.string()
      .required("Please enter your e-mail")
      .email("Invalid e-mail address"),
    password: Yup.string()
      .required("Please enter your password")
  });

export {
  inputs,
  initialValues,
  validationSchema,
}