import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz.js";
import { QuizProvider } from "./contexts/quiz";
import Footer from '../layout/Footer.js';
import NavBar from '../layout/NavBar';

function QuizPage() {
    return (
    ReactDOM.render(
        <React.StrictMode>
            {/* <NavBar /> */}
            {/* <Footer /> */}
            <QuizProvider>
            <Quiz />
            </QuizProvider>
        </React.StrictMode>,
        document.getElementById("root")
    )
    );
}

export default QuizPage;