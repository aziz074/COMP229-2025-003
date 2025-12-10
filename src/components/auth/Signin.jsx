import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authenticate } from "./auth-helper";

const Signin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg("");

        try {
            // 1. Firebase sign-in
            const fbUser = await signInWithEmailAndPassword(auth, email, password);
            const token = await fbUser.user.getIdToken();

            console.log("SIGNIN TOKEN:", token);

            // 2. Save token to sessionStorage
            authenticate(token);

            console.log("TOKEN AFTER AUTH:", sessionStorage.getItem("token"));

            alert("Signin successful!");
            navigate("/");
        } 
        catch (err) {
            console.error(err);
            setErrorMsg("Invalid email or password.");
        }
    };

    return (
        <div className="container" style={{ paddingTop: 10 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Signin</h1>

                    {errorMsg && (
                        <p className="flash">
                            <span>{errorMsg}</span>
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="form card p-3">

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <br />

                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button>

                        &nbsp;

                        <Link to="/users/signup" style={{ textDecoration: "none" }}>
                            Sign-up
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
