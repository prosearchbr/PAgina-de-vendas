
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { ArrowDownIcon, FlowerIcon } from './icons/Icons';

const SolutionPage: React.FC = () => {
    const { state, nextPage } = useQuiz();

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full text-center transform transition-all duration-500 animate-fade-in">
            <div className="mx-auto w-16 h-16 text-pink-500 mb-4">
                <FlowerIcon />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-4">
                {state.name}, com base nas suas respostas, temos uma solução específica para você!
            </h1>
            <p className="text-slate-600 mb-4">Não é magia, é método! As preocupações e sensações que você descreveu são completamente normais e, o mais importante, possíveis de serem trabalhadas com as técnicas certas.</p>
            <p className="text-slate-600 mb-8">O cansaço, a ansiedade e a sensação de estagnação podem ser significativamente aliviados com um protocolo direto e baseado em evidências.</p>
            <div className="mx-auto w-12 h-12 text-pink-400 animate-bounce mb-6">
                <ArrowDownIcon />
            </div>
            <button
                onClick={nextPage}
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
            >
                Descobrir Meu Protocolo Personalizado
            </button>
        </div>
    );
};

export default SolutionPage;
