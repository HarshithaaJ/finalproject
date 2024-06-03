import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import  styles from './viewpage.module.css';
import Dashboard from '../dashboard/dashboard';
 //import Analytics from '../analytics';
 //import CreateQuiz from '../createquiz';


const ViewPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic here
        alert('Logged out');
        navigate('/');
    };

    return (
        <div className={styles.viewpage}>
            <div className={styles.sidebar}>
                <Link to="/view/dashboard">Dashboard</Link>
                <Link to="/view/analytics">Analytics</Link>
                <Link to="/view/create-quiz">Create Quiz</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className={styles.main-content}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="create-quiz" element={<CreateQuiz />} />
                    <Route index element={<Dashboard />} /> {/* Default route */}
                </Routes>
            </div>
        </div>
    );
};

export default ViewPage;


