import React from 'react';
import { useQuiz } from '../context/QuizContext';

const WelcomePage: React.FC = () => {
    const { nextPage } = useQuiz();

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full text-center transform transition-all duration-500 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-4">Protocolo Exclusivo para Acelerar seu Parto de Forma Segura e Natural</h1>
            <p className="text-slate-600 mb-8">Responda a algumas perguntas rápidas para uma análise personalizada ou vá direto para conhecer o protocolo que já ajudou centenas de mamães.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={nextPage}
                    className="w-full sm:w-auto bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50"
                >
                    Começar o Protocolo
                </button>
                <button
                    onClick={nextPage}
                    className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                >
                    Começar Minha Análise Agora
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;