import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../FirebaseFunctions/firebase";
import Navbar from "../../LandingPage/Components/Navbar/navbar";
import Footer from "../../LandingPage/Components/Footer/footer";
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const googleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>

            <div className="loginBase">
                <div className="loginContainer">
                    <h1>Login</h1>
                    
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>

                    <a href="#" className="forgot-password">Forgot password</a>

                    <button className="login-button"><p>Login</p></button>
                    <button className="google-login" onClick = { googleLogin }>
                        <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                        />
                        <p>Sign in with Google</p>
                    </button>

                    <div>
                        <p>Don't have an account? <a href="/signup" onClick={() => navigate("/signup")}>Sign up</a></p>
                    </div>
                    
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Login;