import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        try {
            const response = await axios.post('http://localhost:8080/api/user', form);

            if (response.status === 200) {
                console.log('Registration successful');
                localStorage.setItem('registeredUser', JSON.stringify(form));
            } else {
                console.error('Registration failed:', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setForm({
            email: '',
            password: '',
        });
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    Register Form
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="register-input-field">
                        <input 
                            type="text" 
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    <div className="register-input-field">
                        <input 
                            type="password" 
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required 
                        />
                    </div>
                    <button className="register-button" type="submit">Sign up</button>
                </form>
                <div className="sign-in">
                    Already registered? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
