import { Field, Formik, Form } from "formik";

import { useId } from "react";

import css from "./Seeder.module.css";
import { addEvents } from "../../redux/events/operations";
import { useDispatch } from "react-redux";

const Seeder = () => {
  const exempleSeed = JSON.stringify([
    {
      title: "AAAA",
      description: "testEvent8",
      event_date: "2000-01-01",
      organizer: "I",
    },
    {
      title: "BBBB",
      description: "testEvent00",
      event_date: "2000-01-01",
      organizer: "I",
    },
  ]);

  const seederField = useId();
  const dispatch = useDispatch();
  function handleSubmit(value, actions) {
    let newArr = JSON.parse(value.seed);
    dispatch(addEvents(newArr));
  }
  return (
    <>
      <Formik initialValues={{ seed: "" }} onSubmit={handleSubmit}>
        <Form className={css.seed_form}>
          <label htmlFor={seederField}>Seed</label>
          <Field type="text" name="seed" id={seederField} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <p>Put seed there like that:</p>
      <p>{exempleSeed}</p>
    </>
  );
};

export default Seeder;
