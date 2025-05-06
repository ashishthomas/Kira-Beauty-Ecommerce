import React, { useState } from "react";
import "./LoginModal.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { toast } from "react-toastify";

type Props = {
  onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Fake login/signup logic
    localStorage.setItem("token", "dummy-token");
    dispatch(login());
    toast.success(`${isRegistering ? "Signed up" : "Logged in"} successfully`);
    onClose();
  };

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isRegistering ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
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
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsRegistering(!isRegistering)} className="toggle-auth">
            {isRegistering ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
