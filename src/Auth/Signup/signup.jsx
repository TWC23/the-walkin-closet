import { useNavigate } from "react-router-dom";
import Navbar from "../../LandingPage/Components/Navbar/navbar";
import Footer from "../../LandingPage/Components/Footer/footer";
import './signup.css';

const SignUp = () => {
    const navigate = useNavigate();

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
                        <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" placeholder="example@gmail.com" required />
                    </div>
                    <div className="input-container">
                        <label>Phone Number</label>
                        <input type="text" placeholder="XXXXXXXXXX" required />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" placeholder="Create password" required />
                    </div>

                    <button className="signup-button"><p>Create Account</p></button>
                    <button className="google-login">
                        <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                        />
                        <p>Sign in with Google</p>
                    </button>

                    <div>
                        <p>Already have an account? <a href="/login" onClick={() => "/login"}>Login</a></p>
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