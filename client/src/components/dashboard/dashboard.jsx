import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import styles from  "./dashboard.module.css";

const Dashboard = () => {
    const [totalQuizzes, setTotalQuizzes] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [totalImpressions, setTotalImpressions] = useState(0);
    const [trendingQuizzes, setTrendingQuizzes] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/v1/quiz/dashboard');
                const data = response.data;
                setTotalQuizzes(data.totalQuizzes);
                setTotalQuestions(data.totalQuestions);
                setTotalImpressions(data.totalImpressions);
                setTrendingQuizzes(data.trendingQuizzes);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.data1}>
                    <h3>Total Quizzes</h3>
                    <p>{totalQuizzes}</p>
                </div>
                <div className={styles.data1}>
                    <h3>Total Questions</h3>
                    <p>{totalQuestions}</p>
                </div>
                <div className={styles.data1}>
                    <h3>Total Impressions</h3>
                    <p>{totalImpressions}</p>
                </div>
            </div>
            <div className={styles.trendingquizzes}>
                <h3>Trending Quizzes</h3>
                <ul>
                    {trendingQuizzes.map((quiz, index) => (
                        <li key={index}>
                            {quiz.quizName} - Impressions: {quiz.impressions}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
