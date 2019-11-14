import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import uuid from "uuid";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const HirePersonForm = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "First name",
          lastName: "Last name"
        }}
        onSubmit={values => {
          const newPerson = {
            ...values,
            age: 25,
            gender: "m",
            id: uuid()
          };
          hirePerson(newPerson);
        }}
      >
        {({ handleSubmit, errors, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <Field name="firstName" type="text" />
                {errors.firstName && <span> {errors.firstName} </span>}
              </div>
              <div>
                <Field name="lastName" type="text" />
                {errors.lastName && <span> {errors.lastName} </span>}
              </div>
              <div>
                <button disabled={!isValid} type="submit">
                  Hire!
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HirePersonForm;
