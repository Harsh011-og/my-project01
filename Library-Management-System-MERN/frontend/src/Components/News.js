import React from 'react';
import './News.css';

function News() {
    return (
        <div className="news-container">
            <h2 className="news-title">Updates for You</h2>
            <div className="news-data">
                {/* Competitions Section */}
                {['Competition-1', 'Competition-2', 'Competition-3', 'Competition-4', 'Competition-5', 'Competition-6', 'Competition-7', 'Competition-8', 'Competition-9'].map((comp, index) => (
                    <div key={index} className="news-competition-event">
                        <p>{comp}</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;