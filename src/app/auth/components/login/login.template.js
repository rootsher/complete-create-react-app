import React from 'react';
import { Formik, Field, Form } from 'formik';

import { LoginSchema } from './login.schema';
import './login.css';

export default ({ onClick }) => (
  <section className="route__login">
    <h1>login</h1>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => onClick()}
      render={({ errors, touched, isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <Field type="password" name="password" />
            {errors.password &&
              touched.password && <div>{errors.password}</div>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    />
  </section>
);
