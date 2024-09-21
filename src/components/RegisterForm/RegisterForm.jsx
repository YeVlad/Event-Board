import { Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createParticipant } from "../../redux/participants/operations";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  how_found: Yup.string().required("You must select an option"),
});

const RegisterForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const fullnameField = useId();
  const emailField = useId();
  const dateOfBirthField = useId();

  const { eventId } = useParams();

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    console.log(values.dateOfBirth);

    if (values.full_name.trim() && values.email.trim() && values.how_found) {
      const day = startDate.getDate();
      const month = startDate.getMonth() + 1;
      const year = startDate.getFullYear();

      const dateOfBirth = `${day}/${month}/${year}`;

      const subObj = { ...values, dateOfBirth, eventId };
      dispatch(createParticipant(subObj));
      actions.resetForm();
    }
  }

  const initialState = {
    full_name: "",
    email: "",
    dateOfBirth: "",
    how_found: "",
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className="form_frame">
        <label htmlFor={fullnameField} className="small_text">
          Full name
        </label>
        <Field
          type="text"
          name="full_name"
          id={fullnameField}
          className="needMar"
        />
        <ErrorMessage name="full_name" component="span" className="error" />

        <label htmlFor={emailField} className="small_text">
          Email
        </label>
        <Field type="email" name="email" id={emailField} className="needMar" />
        <ErrorMessage name="email" component="span" className="error" />

        <label htmlFor={dateOfBirthField} className="small_text">
          Date of birth
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          type="text"
          name="dateOfBirth"
          id={dateOfBirthField}
          popperPlacement="top-end"
          className="needMar"
        />
        <label className="small_text, needMar">
          Where did you hear about this event?
        </label>
        <div className="radio_group">
          <label className="small_text">
            <Field
              type="radio"
              name="how_found"
              value="Social media"
              className="needMar"
            />
            Social media
          </label>
          <label className="small_text">
            <Field
              type="radio"
              name="how_found"
              value="Friends"
              className="needMar"
            />
            Friends
          </label>
          <label className="small_text, needMar">
            <Field
              type="radio"
              name="how_found"
              value="Found myself"
              className="needMar"
            />
            Found myself
          </label>
        </div>
        <button className="small_text" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
