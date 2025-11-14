

import React from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import WelcomePage from './components/WelcomePage';
import PersonalInfoPage from './components/PersonalInfoPage';
import AnxietyPage from './components/AnxietyPage';
import PhysicalSensationsPage from './components/PhysicalSensationsPage';
import PreparationPage from './components/PreparationPage';
import SolutionPage from './components/SolutionPage';
import FeedbackPage from './components/FeedbackPage';
import ConfirmationPage from './components/ConfirmationPage';

const PageRenderer: React.FC = () => {
    // FIX: The 'currentPage' property is on the 'state' object returned by useQuiz.
    const { state: { currentPage } } = useQuiz();

    switch (currentPage) {
        case 1:
            return <WelcomePage />;
        case 2:
            return <PersonalInfoPage />;
        case 3:
            return <AnxietyPage />;
        case 4:
            return <PhysicalSensationsPage />;
        case 5:
            return <PreparationPage />;
        case 6:
            return <SolutionPage />;
        case 7:
            return <FeedbackPage />;
        case 8:
            return <ConfirmationPage />;
        default:
            return <WelcomePage />;
    }
};

const App: React.FC = () => {
    return (
        <QuizProvider>
            <main className="min-h-screen text-slate-700 flex items-center justify-center p-4">
                <PageRenderer />
            </main>
        </QuizProvider>
    );
};

export default App;