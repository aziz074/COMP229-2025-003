import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { create } from "../../datasource/api-user.js";
import UserModel from "../../datasource/userModel.js";

// Firebase imports
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    let navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");
    const [user, setUser] = useState(new UserModel());

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg("");

        const confirmPassword = document.getElementById("confirmPasswordTextField").value;

        // Check password match
        if (user.password !== confirmPassword) {
            setErrorMsg("ERROR: Passwords don't match. Please try again.");
            return;
        }

        try {
            // 1️⃣ Create Firebase User
            const fbUser = await createUserWithEmailAndPassword(auth, user.email, user.password);

            const uid = fbUser.user.uid;                 
            const token = await fbUser.user.getIdToken(); 

            // 2️⃣ Prepare final user object for backend
            const finalUser = {
                ...user,
                uid: uid,
                token: token
            };

            // 3️⃣ Send to backend
            const data = await create(finalUser);

            if (data && data.success) {
                alert("User created successfully!");
                navigate("/users/signin");
            } else {
                setErrorMsg(data.message || "Backend error occurred.");
            }
        } catch (err) {
            console.log(err);
            setErrorMsg(err.message);
        }
    };

    return (
        <div className="container" style={{ paddingTop: 10 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Create a new user</h1>
                    <p className="flash"><span>{errorMsg}</span></p>

                    <form onSubmit={handleSubmit} className="form card p-3">

                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={user.firstName || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastLast"
                                value={user.lastName || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={user.username || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={user.email || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={user.password || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPasswordTextField"
                                placeholder="Confirm password"
                                required
                            />
                        </div>

                        <br />

                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i> Submit
                        </button>

                        &nbsp;&nbsp;

                        <Link to="/users/signin" className="btn btn-warning">
                            <i className="fas fa-undo"></i> Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
