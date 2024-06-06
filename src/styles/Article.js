// src/components/Article.js
import React from 'react';
import './Article.css';

function Article() {
  return (
    <div className="article-container">
      <h1 className="article-title">Understanding Hypertension</h1>
      <h2 className="article-subtitle">Causes, Symptoms, and Treatment</h2>
      <p className="article-text">
        Hypertension, or high blood pressure, is a common condition that affects millions of people worldwide. It occurs when the force of blood against your artery walls is too high, which can lead to health problems like heart disease.
      </p>
      <img src="https://via.placeholder.com/800x400" alt="Hypertension illustration" className="article-image" />
      <p className="article-text">
        The primary causes of hypertension include genetics, poor diet, lack of exercise, and stress. Symptoms often include headaches, shortness of breath, and nosebleeds, though many people may not experience any symptoms at all.
      </p>
      <blockquote className="article-quote">
        "Hypertension is a silent killer because it often has no symptoms but can cause serious health problems if left untreated."
      </blockquote>
      <p className="article-text">
        Treatment typically involves lifestyle changes such as eating a healthier diet, exercising regularly, and taking medication. It's important to work with your healthcare provider to manage your blood pressure effectively.
      </p>
      <ul className="article-list">
        <li>Maintain a healthy diet</li>
        <li>Exercise regularly</li>
        <li>Avoid excessive salt intake</li>
        <li>Monitor your blood pressure</li>
      </ul>
      <p className="article-text">
        For more information on hypertension, visit the <a href="https://www.who.int/health-topics/hypertension" className="article-link">World Health Organization</a>.
      </p>
    </div>
  );
}

export default Article;
