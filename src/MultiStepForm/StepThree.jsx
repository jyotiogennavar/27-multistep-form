import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormContainer, ButtonWrapperTwo, FormContent, AddressContent } from "./FormStyle";

const StepThree = ({ next, prev, data }) => {
  const stepThreeValidationSchema = Yup.object({});

  const handleSubmit = (values) => {
    next(values, true);
  };

  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <FormContainer>
          <h1>Confirm Information</h1>

          <FormContent>
            <p>Name</p>
            <Field name="Name" />
            <p>Phone Number</p>
            <Field name="phone_number" />
            <p>Email</p>
            <Field name="email" />
            <AddressContent>
              <div>
                <p>City</p>
                <Field name="city" />
                <p>State</p>
                <Field name="state" />
              </div>
              <div>
                <p>Zip</p>
                <Field name="zip" />
                <p>Country</p>
                <Field name="country" />
              </div>
            </AddressContent>
          </FormContent>

          <ButtonWrapperTwo>
            <button type="button" onClick={() => prev(values)}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </ButtonWrapperTwo>
        </FormContainer>
      )}
    </Formik>
  );
};

export default StepThree;
