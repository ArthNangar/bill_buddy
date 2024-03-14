import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const navigate=useNavigate();

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', form);

        axios.get(`http://localhost:8080/api/user/${form.email}/${form.password}`)
            .then(response => {
                console.log(response.data);
                navigate('/home');

            })
            .catch(error => {
                console.error('Login failed:', error.response.data);
            });

        setForm({
            email: '',
            password: '',
        });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    Login Form
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="text" 
                            required
                            name='email'
                            onChange={handleInputChange} 
                            value={form.email}
                        />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            required 
                            name='password'
                            onChange={handleInputChange}
                            value={form.password}
                        />
                        <label>Password</label>
                    </div>
                    <button className="login-button">Log in</button>
                    <div className="sign-up">
                        Not a member? <Link to='/register'>Sign up now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
