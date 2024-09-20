import { Field, Form, Formik } from "formik";
import { useId } from "react";

import { useParams } from "react-router-dom";

import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { createParticipant } from "../../redux/participants/operations";

const RegisterForm = () => {
  const fullnameField = useId();
  const emailField = useId();
  const dateOfBirthField = useId();

  const { eventId } = useParams();

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    if (
      values.full_name.trim() &&
      values.email.trim() &&
      values.dateOfBirth.trim() &&
      values.how_found
    ) {
      const subObj = { ...values, eventId };
      dispatch(createParticipant(subObj));
      actions.resetForm();
    }
  }

  const initialState = { full_name: "", email: "", dateOfBirth: "" };

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      <Form className={css.form_frame}>
        <label htmlFor={fullnameField}>Full name</label>
        <Field type="text" name="full_name" id={fullnameField} />

        <label htmlFor={emailField}>Email</label>
        <Field type="email" name="email" id={emailField} />

        <label htmlFor={dateOfBirthField}>Date of birth</label>
        <Field type="text" name="dateOfBirth" id={dateOfBirthField} />

        <label>Where did you hear about this event?</label>
        <div className={css.radio_group}>
          <label>
            <Field type="radio" name="how_found" value="Social media" />
            Social media
          </label>
          <label>
            <Field type="radio" name="how_found" value="Friends" />
            Friends
          </label>
          <label>
            <Field type="radio" name="how_found" value="Found myself" />
            Found myself
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
