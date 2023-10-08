import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SingupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format 000-00-00')
    .required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>

        <label htmlFor="">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
