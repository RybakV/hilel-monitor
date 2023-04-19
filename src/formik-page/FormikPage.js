import './FormikPage.css';
import { Formik, Form, Field } from 'formik';

    function FormikPage() {

        function validateUsername(value) {
            let error;
            if (!value) {
                error = 'Required';
            } else if (!/^[A-Z\s]+$/i.test(value)) {
                error = 'Invalid name';
            }
            return error;
        }
        function validateEmail(value) {
            let error;
            if (!value) {
                error = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                error = 'Invalid email address';
            }
            return error;
        }
        function validatePhone(value) {
            let error;
            if (!value) {
                error = 'Required';
            } else if (!/^\+[0-9]{12}$/.test(value)) {
                error = 'Invalid phone number. Example: [+123456789012]';
            }
            return error;
        }

        return (
            <div className="formik-page">
                <h1>Find Illuminati</h1>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        phone: '',
                    }}
                    onSubmit={values => {
                        console.log('Submitted data: ', values);
                    }}
                >
                    {({ errors, touched, validateField, validateForm }) => (
                        <Form className="formik-form ">
                            <fieldset>
                                <label>Username</label>
                                <Field name="username" validate={validateUsername} />
                                {errors.username && touched.username && <div className="formic-error">{errors.username}</div>}
                            </fieldset>
                            <fieldset>
                                <label>Email</label>
                                <Field name="email" validate={validateEmail} />
                                {errors.email && touched.email && <div className="formic-error">{errors.email}</div>}
                            </fieldset>
                            <fieldset>
                                <label>Phone</label>
                                <Field name="phone" validate={validatePhone} />
                                {errors.phone && touched.phone && <div className="formic-error">{errors.phone}</div>}
                            </fieldset>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    onClick={() => validateForm().then(() => console.log('blah'))}*/}
                            {/*>*/}
                            {/*    Validate All*/}
                            {/*</button>*/}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }

export default FormikPage;