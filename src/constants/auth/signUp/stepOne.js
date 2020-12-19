import * as Yup from 'yup';

const StepOneData = () => {

  const inputs = [
    {
      name: "username",
      label: "Username",
      inputType: "text"
    },
    {
      name: "email",
      label: "E-mail",
      inputType: "text"
    }
  ];

  const validationSchema =
    Yup.object().shape({
      username: Yup.string()
        .required("Please enter your username"),
      email: Yup.string()
        .required("Please enter your e-mail")
        .email("Invalid e-mail address")
    });

  return {
    inputs,
    validationSchema
  };
};

export default StepOneData;