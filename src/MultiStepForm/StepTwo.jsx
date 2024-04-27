import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormContainer, ButtonWrapperTwo , FormContent  } from "./FormStyle";


const StepTwo = ({ next, prev, data }) => {
  const stepTwoValidationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <FormContainer>
          <h1>Address Information</h1>
          <FormContent>
            <p>City</p>
            <Field name="city" />
            <ErrorMessage name="city" />

            <p>State</p>
            <Field name="state" />
            <ErrorMessage name="state" />
            <p>Zip</p>
            <Field name="zip" />
            <ErrorMessage name="zip" />
            <p>Country</p>
            <Field name="country" />
            <ErrorMessage name="country" />
          </FormContent>

          <ButtonWrapperTwo>
            <button type="button" onClick={() => prev(values)}>
              Previous
            </button>
            <button type="submit">Next</button>
          </ButtonWrapperTwo>
        </FormContainer>
      )}
    </Formik>
  );
};



export default StepTwo;
