
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { UserIcon, StarIcon } from './icons/Icons';

const feedbacks = [
    {
        name: 'Juliana S.',
        weeks: '39 Semanas',
        quote: 'Já não aguentava mais de ansiedade. Com 39 semanas, parecia que meu bebê nunca ia chegar. Segui o protocolo do AtivaParto à risca e, em 3 dias, as contrações engrenaram! Foi a melhor decisão que tomei.',
    },
    {
        name: 'Carla M.',
        weeks: '40 Semanas',
        quote: 'Estava com medo de induzir no hospital. Uma amiga me indicou o app e foi incrível. Os exercícios e dicas me deram a confiança que eu precisava. Minha bolsa estourou naturalmente na madrugada seguinte!',
    },
    {
        name: 'Fernanda L.',
        weeks: '38 Semanas',
        quote: 'Eu só queria evitar uma cesárea desnecessária. O protocolo me ajudou a relaxar e a entender os sinais do meu corpo. Em menos de uma semana, entrei em trabalho de parto ativo. Sou muito grata!',
    }
];

const FeedbackPage: React.FC = () => {
    const { nextPage, prevPage } = useQuiz();

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-3xl w-full transform transition-all duration-500 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">O que as mamães estão dizendo...</h1>
            <p className="text-slate-600 mb-8 text-center">Veja como o Protocolo AtivaParto ajudou outras gestantes na reta final.</p>

            <div className="space-y-6">
                {feedbacks.map((fb, index) => (
                    <div key={index} className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center mr-4 p-2">
                                <UserIcon />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">{fb.name}</p>
                                <p className="text-sm text-slate-500">{fb.weeks}</p>
                            </div>
                            <div className="ml-auto flex">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                            </div>
                        </div>
                        <p className="text-slate-600 italic">"{fb.quote}"</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 space-y-4">
                <button
                    onClick={nextPage}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Estou Pronta! Ver Meu Protocolo
                </button>
                <button onClick={prevPage} className="w-full text-slate-500 hover:text-slate-700 py-2 rounded-full transition hover:bg-slate-100">
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;
