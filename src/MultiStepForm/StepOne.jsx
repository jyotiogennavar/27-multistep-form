import React from "react";
import { Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

import styled from "styled-components";

import { FormContainer, FormContent  } from "./FormStyle";

const StepOne = ({ next, data }) => {
  const stepOneValidationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    email: Yup.string().email().required("Email is required"),
  });

  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormContainer>
          <h1>General Information</h1>
          <FormContent>
            <p>Name</p>
            <Field name="Name" />
            <ErrorMessage name="Name" />
            <p>Phone Number</p>
            <Field name="phone_number" />
            <ErrorMessage name="phone_number" />
            <p>Email</p>
            <Field name="email" />
            <ErrorMessage name="email" />
          </FormContent>
          <ButtonWrapper>
            <button type="submit">Next</button>
          </ButtonWrapper>
        </FormContainer>
      )}
    </Formik>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export default StepOne;
