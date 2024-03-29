import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../FirebaseFunctions/firebase";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import "./login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="loginBase">
        <div className="loginContainer">
          <h1>Log in to your account</h1>
          <below-login>Welcome Back! Please enter your details</below-login>
          <div className="input-container">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              required
            />
          </div>

          <div className="forgopass">
            <a href="#" className="forgot-password">
              Forgot password
            </a>
          </div>

          <button className="login-button" onClick={login}>
            <p>Sign in</p>
          </button>
          <button className="google-login" onClick={googleLogin}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Trees"
              height="30"
            />
            <p>Sign in with Google</p>
          </button>

          <div className="link-to-signup">
            <p>
              Don&apos;t have an account?{" "}
              <a href="/signup" onClick={() => navigate("/signup")}>
                Sign up
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
