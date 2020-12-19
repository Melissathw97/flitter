import * as Yup from 'yup';

const StepTwoData = () => {

  const inputs = [
    {
      name: "password",
      label: "Password",
      inputType: "password"
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      inputType: "password"
    }
  ];

  const validationSchema =
    Yup.object().shape({
      password: Yup.string()
        .required("Please enter your password"),
      confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Passwords do not match"),
    });

  return {
    inputs,
    validationSchema
  };
};

export default StepTwoData;