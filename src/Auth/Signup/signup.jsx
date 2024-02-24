import { useState } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../FirebaseFunctions/firebase";
import Navbar from "../../LandingPage/Components/Navbar/navbar";
import Footer from "../../LandingPage/Components/Footer/footer";
import './signup.css';

const SignUp = () => {
    const [signupEmail, setSignupEmail] = useState();
    const [signupPassword, setSignupPassword] = useState();
    const navigate = useNavigate();

    const googleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                navigate("/comingsoon");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
            navigate("/comingsoon");
        } catch (error) {
            console.log(error.message);
        }
    };
    
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>

            <div className="signupBase">
                <div className="signupContainer">
                    <h1>Create Account</h1>
                    
                    <div className="input-container">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            onChange={(event) => {
                                setSignupEmail(event.target.value);
                            }}
                            required />
                    </div>
                    <div className="input-container">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="XXXXXXXXXX"
                            required />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create password"
                            onChange={(event) => {
                                setSignupPassword(event.target.value);
                            }}
                            required />
                    </div>

                    <button className="signup-button" onClick={signup}><p>Create Account</p></button>
                    <button className="google-login" onClick={ googleLogin }>
                        <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                        />
                        <p>Sign in with Google</p>
                    </button>

                    <div>
                        <p>Already have an account? <a href="/login" onClick={() => navigate("/login")}>Login</a></p>
                    </div>
                    
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default SignUp;