
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import { QuestionMarkIcon, HeartIcon, TiredFaceIcon, FlowerIcon } from './icons/Icons';

const PreparationPage: React.FC = () => {
    const { state, setPreparationAnswer, nextPage, prevPage } = useQuiz();
    
    const options = [
        { text: "Não sei reconhecer os sinais reais de que o parto começou.", icon: <QuestionMarkIcon /> },
        { text: "Tenho medo da dor e de não saber lidar com as contrações.", icon: <HeartIcon /> },
        { text: "Me sinto despreparada fisicamente, sem energia para o parto.", icon: <TiredFaceIcon /> },
        { text: "Já li bastante, mas queria uma 'fórmula' prática para seguir nestes últimos dias.", icon: <FlowerIcon /> }
    ];
    
    const handleSelect = (optionText: string) => {
        setPreparationAnswer(optionText);
        setTimeout(() => nextPage(), 300);
    };

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full transform transition-all duration-500 animate-fade-in">
            <ProgressBar currentStep={3} totalSteps={3} />
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">Sobre a preparação para o parto...</h1>
            <p className="text-slate-600 mb-8 text-center">Toda informação é poder! Vamos ver como você está se sentindo em relação à etapa final.</p>
            
            <h2 className="text-lg font-medium text-slate-700 mb-4 text-center">Ao pensar no trabalho de parto, o que mais te preocupa?</h2>

            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(option.text)}
                        className={`w-full text-left p-4 border rounded-lg flex items-center gap-4 transition duration-200 ${
                            state.preparationAnswer === option.text
                            ? 'bg-pink-500 text-white border-pink-500 ring-2 ring-pink-300'
                            : 'bg-white hover:bg-pink-100 border-pink-200'
                        }`}
                    >
                        <div className="flex-shrink-0 w-6 h-6">{option.icon}</div>
                        <span>{option.text}</span>
                    </button>
                ))}
            </div>
             <div className="mt-8 space-y-4">
                <button 
                    onClick={nextPage} 
                    disabled={!state.preparationAnswer}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:bg-slate-300 disabled:cursor-not-allowed">
                    Finalizar Análise
                </button>
                <button onClick={prevPage} className="w-full text-slate-500 hover:text-slate-700 py-2 rounded-full transition hover:bg-slate-100">
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default PreparationPage;