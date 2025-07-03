import React, { useState } from "react";
import "./LoginModal.scss";
import { useDispatch } from "react-redux";
import { login } from "../../app/Slices/AuthSlice";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {
  onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z ]+$/, "Name can only contain letters and spaces")
      .required("Name is required"),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleFormikSubmit = (values: typeof initialValues) => {
    const { name, email, password } = values;
    const usersStr = localStorage.getItem("users");
    const users = usersStr ? JSON.parse(usersStr) : {};

    if (isRegistering) {
      if (users[email]) {
        toast.error("User already exists");
        return;
      }

      users[email] = { name, email, password };
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("token", "dummy-token");
      dispatch(login(name));
      toast.success("Signed up successfully");
      onClose();
    } else {
      if (!users[email] || users[email].password !== password) {
        toast.error("Invalid email or password");
        return;
      }

      localStorage.setItem("token", "dummy-token");
      dispatch(login(users[email].name));
      toast.success("Logged in successfully");
      onClose();
    }
  };

  const handleForgotPassword = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowForgot(true);
  };

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{isRegistering ? "Sign Up" : "Login"}</h2>
        <Formik
          initialValues={
            isRegistering
              ? { name: "", email: "", password: "" }
              : { name: "", email: "", password: "" }
          }
          enableReinitialize
          validationSchema={isRegistering ? registerSchema : loginSchema}
          onSubmit={handleFormikSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {isRegistering && (
                <div>
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              )}
              <div>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              {!isRegistering && showForgot && (
                <div className="forgot-password-form">
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                    className="forgot-password-input"
                    style={{ marginBottom: 8, width: "100%" }}
                  />
                  <button
                    type="button"
                    className="forgot-password-btn"
                    style={{ width: "100%" }}
                    onClick={() => {
                      const email = forgotEmail.trim().toLowerCase();
                      const usersStr = localStorage.getItem("users");
                      const users = usersStr ? JSON.parse(usersStr) : {};
                      if (users[email]) {
                        // Generate a temporary password
                        const tempPassword = Math.random()
                          .toString(36)
                          .slice(-8);
                        users[email].password = tempPassword;
                        localStorage.setItem("users", JSON.stringify(users));
                        toast.info(
                          `Your temporary password is: ${tempPassword}`
                        );
                      } else {
                        toast.error("No user found with this email.");
                      }
                      setShowForgot(false);
                      setForgotEmail("");
                    }}
                  >
                    Reset Password
                  </button>
                </div>
              )}
              <button type="submit" disabled={isSubmitting}>
                {isRegistering ? "Sign Up" : "Login"}
              </button>
              {!isRegistering && !showForgot && (
                <div className="forgot-password-link">
                  <span
                    onClick={handleForgotPassword}
                    className="forgot-password-span"
                  >
                    Forgot Password?
                  </span>
                </div>
              )}
            </Form>
          )}
        </Formik>
        <p className="toggle-auth-text">
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsRegistering(!isRegistering)}
            className="toggle-auth"
          >
            {isRegistering ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
