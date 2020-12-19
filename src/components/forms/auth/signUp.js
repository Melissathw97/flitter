import React, { useState } from 'react';
import styleClasses from '../../../styles/auth.module.scss';
import { useAuth } from '../../../utils/Firebase/auth';
import stepOneData from '../../../constants/auth/signUp/stepOne';
import stepTwoData from '../../../constants/auth/signUp/stepTwo';
import { Formik, Form } from 'formik';
import FormInputs from '../inputs';
import { MainButton, ButtonLink } from '../../buttons';
import { useMutation } from '@apollo/client';
import { UPDATE_USERNAME } from '../../../lib/graphqlMutations';

const SignUpForm = () => {

  const { userSignUp } = useAuth();

  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [updateUsername] = useMutation(UPDATE_USERNAME);

  let data;

  if (step === 1) {
    data = stepOneData();
  } else {
    data = stepTwoData();
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = ({ username, email }) => {
    setValues({
      ...values,
      username,
      email
    });
    setStep(step + 1);
  };

  const inputs = data.inputs;
  const validationSchema = data.validationSchema;

  const handleSubmit = ({ email, password }) => {
    setIsSubmitting(true);
    userSignUp(email, password)
      .then(res => {

        console.log(res);
        debugger

        // updateUsername({
        //   variables: {

        //   }
        // })
        setIsSubmitting(false);
      })
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={step === 1 ? nextStep : handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className={styleClasses.form}>
          {
            inputs.map(({ name, label, inputType }) => (
              <FormInputs
                key={name}
                name={name}
                label={label}
                value={values[name]}
                inputType={inputType}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            ))
          }
          <div className={styleClasses.buttonWrapper}>
            {
              step === 2 &&
              <ButtonLink
                type="button"
                title="Back"
                onClick={previousStep}
                disabled={isSubmitting}
              />
            }
            <MainButton
              type="submit"
              title={step === 1 ? "Next" : "Submit"}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
};

export default SignUpForm;