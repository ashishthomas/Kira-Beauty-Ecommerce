import React, { useState } from "react";
import "./LoginModal.scss";
import { useDispatch } from "react-redux";
import { login } from "../../app/Slices/AuthSlice";
import { toast } from "react-toastify";

type Props = {
  onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

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

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{isRegistering ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegistering ? "Sign Up" : "Login"}</button>
        </form>
        <p>
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
