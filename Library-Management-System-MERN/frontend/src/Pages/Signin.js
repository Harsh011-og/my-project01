import React, { useContext, useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.js';
import Switch from '@material-ui/core/Switch';

function Signin() {
    const [isStudent, setIsStudent] = useState(true);
    const [credentials, setCredentials] = useState({
        admissionId: '',
        employeeId: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { dispatch } = useContext(AuthContext);

    const API_URL = process.env.REACT_APP_API_URL;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const loginCall = async (userCredential) => {
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${API_URL}api/auth/signin`, userCredential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            setError("");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err });
            setError("Wrong Password or Username");
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (isStudent) {
            loginCall({ 
                admissionId: credentials.admissionId, 
                password: credentials.password 
            });
        } else {
            loginCall({ 
                employeeId: credentials.employeeId, 
                password: credentials.password 
            });
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <form onSubmit={handleForm}>
                    <h2 className="signin-title">Log in</h2>
                    <p className="line"></p>
                    <div className="persontype-question">
                        <p>Are you a Staff member?</p>
                        <Switch
                            checked={!isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                            color="primary"
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="signin-fields">
                        <label htmlFor={isStudent ? "admissionId" : "employeeId"}>
                            {isStudent ? "Admission ID" : "Employee ID"}
                        </label>
                        <input
                            className="signin-textbox"
                            type="text"
                            name={isStudent ? "admissionId" : "employeeId"}
                            placeholder={isStudent ? "Enter Admission ID" : "Enter Employee ID"}
                            value={isStudent ? credentials.admissionId : credentials.employeeId}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            className="signin-textbox"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="signin-button">Log In</button>
                    <a className="forget-pass" href="#home">Forgot password?</a>
                </form>
                <div className="signup-option">
                    <p className="signup-question">Don't have an account? Contact Librarian</p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
