import React, { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const authLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logout successfully.!!");
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stop();
  }, []);

  console.log(user);

return (
  <div className="login-container">
    <div className="login-left">
      <div className="overlay">
        <h1>Welcome Back 👋</h1>
        <p>
          Sign in with Google and access your account instantly.
        </p>
      </div>
    </div>

    <div className="login-right">
      <div className="login-card">
        <h2>Google Authentication</h2>
        <p className="subtitle">
          Continue with your Google account
        </p>

        {!user ? (
          <button onClick={authLogin} className="google-btn">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
            />
            Continue with Google
          </button>
        ) : (
          <>
            <div className="user-card">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="user-image"
              />

              <h3>{user.displayName}</h3>
              <p>{user.email}</p>
            </div>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  </div>
);
}


export default Login