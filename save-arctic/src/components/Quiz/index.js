import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz.js";
import { QuizProvider } from "./contexts/quiz";
import Footer from '../layout/Footer.js';
import NavBar from '../layout/NavBar';

function QuizPage() {
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    return (
    root.render(
        <React.StrictMode>
            {/* <NavBar></NavBar>
            <Footer></Footer> */}
            <QuizProvider>
            <Quiz />
            </QuizProvider>
        </React.StrictMode>
    )
    );
}

export default QuizPage;