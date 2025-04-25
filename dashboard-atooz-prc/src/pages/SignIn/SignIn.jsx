import { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().required("Username is a required field!"),
  password: yup.string().required("Password is required!"),
});

const validate = (values) => {
  let errors = {};

  return errors;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const LoginFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields
    formfield.append("email", values.email);
    formfield.append("password", values.password);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/staff_and_superuser_login/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        localStorage.setItem(
          "atoozSuperuserandstaffAccessToken",
          response.data.access
        );
        localStorage.setItem(
          "atoozSuperuserandstaffRefreshToken",
          response.data.refresh
        );
        localStorage.removeItem("atoozAccessToken");
        localStorage.removeItem("atoozRefreshToken");
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          error.response.data.non_field_errors ?? error.response.data.error
        );
      });
  };

  const submitLoginForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      LoginFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <Wrapper>
      <div className="register-page">
        <div className="card register-card">
          <h2 className="text-center fs-5">Welcome to Atooz Dashboard</h2>
          <h4 className="text-muted fs-6 text-center mb-4">
            Sign in to continue
          </h4>

          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitLoginForm}
            validate={validate}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <FormikForm noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                      placeholder="Enter username"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={touched.password && !!errors.password}
                      placeholder="Enter password"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <button
                  className="btn btn-primary w-100 mb-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>

                {message && (
                  <div className="alert alert-danger text-center">
                    {message}
                  </div>
                )}
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Page wrapper */
  .register-page {
    min-height: 100vh;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  /* Card styling */
  .register-card {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  /* Inputs */
  .register-card input.form-control {
    border-radius: 8px;
  }

  /* Button */
  .register-card .btn {
    border-radius: 8px;
    padding: 10px;
    font-weight: 500;
  }
`;

export default SignIn;
