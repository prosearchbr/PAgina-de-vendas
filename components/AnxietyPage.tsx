
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import { HeartIcon, ClockIcon, TiredFaceIcon, FlowerIcon } from './icons/Icons';

const AnxietyPage: React.FC = () => {
    const { state, setAnxietyAnswer, nextPage, prevPage } = useQuiz();
    
    const options = [
        { text: "Estou tão ansiosa que mal consigo dormir, pensando quando o parto vai começar.", icon: <HeartIcon /> },
        { text: "Sinto que já deveria ter entrado em trabalho de parto, cada dia parece uma eternidade.", icon: <ClockIcon /> },
        { text: "A gravidez está cansativa e eu só quero ter meu bebê no colo o mais rápido possível.", icon: <TiredFaceIcon /> },
        { text: "Estou tranquila, mas gostaria de estar fazendo algo ativo para me preparar.", icon: <FlowerIcon /> }
    ];

    const handleSelect = (optionText: string) => {
        setAnxietyAnswer(optionText);
        setTimeout(() => nextPage(), 300);
    };

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full transform transition-all duration-500 animate-fade-in">
            <ProgressBar currentStep={1} totalSteps={3} />
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">
                {state.name}, como você está se sentindo nesta reta final?
            </h1>
            <p className="text-slate-600 mb-8 text-center">É completamente normal sentir uma mistura de ansiedade e cansaço. Vamos ver como isso está se manifestando para você.</p>
            
            <h2 className="text-lg font-medium text-slate-700 mb-4 text-center">Qual dessas frases mais combina com você?</h2>

            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(option.text)}
                        className={`w-full text-left p-4 border rounded-lg flex items-center gap-4 transition duration-200 ${
                            state.anxietyAnswer === option.text
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
                    disabled={!state.anxietyAnswer}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:bg-slate-300 disabled:cursor-not-allowed">
                    Próxima Pergunta
                </button>
                 <button onClick={prevPage} className="w-full text-slate-500 hover:text-slate-700 py-2 rounded-full transition hover:bg-slate-100">
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default AnxietyPage;