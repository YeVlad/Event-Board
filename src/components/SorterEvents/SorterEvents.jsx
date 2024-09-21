import { Field, Form, Formik } from "formik";

import css from "./SorterEvents.module.css";

const SorterEvents = ({ onChangeP }) => {
  return (
    <>
      <Formik initialValues={{}}>
        <Form className={css.filter_form}>
          <Field
            className={css.field}
            as="select"
            name="selectedOption"
            id="selectedOption"
            onChange={onChangeP}
          >
            <option value="">Sort by...</option>
            <option value="title">Title</option>
            <option value="event_date">Event date</option>
            <option value="organizer">Organizer</option>
          </Field>
        </Form>
      </Formik>
    </>
  );
};

export default SorterEvents;
