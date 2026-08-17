import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const mobile = e.target.mobile.value;

    setMessage("");

    // validations
    if (!name || !email || !password || !mobile) {
      setMessage("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (!agreed) {
      setMessage("You must accept Terms & Conditions");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          mobile,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      setMessage("Registration successful ✔️");
      // clear form
      e.target.reset();
      setAgreed(false);

      // optional redirect after 1 sec
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" />

          <input type="email" name="email" placeholder="Email" />

          <input type="text" name="mobile" placeholder="Mobile Number" />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
          />

          <label className="terms-agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I accept the Terms & Conditions
          </label>

          {message && <p className="auth-message">{message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;