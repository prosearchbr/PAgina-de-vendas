
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import { CheckIcon } from './icons/Icons';

const PhysicalSensationsPage: React.FC = () => {
    const { state, togglePhysicalAnswer, nextPage, prevPage } = useQuiz();

    const options = [
        "Prisão de ventre",
        "Inchaço nas pernas e pés",
        "Dores nas costas (especialmente na região lombar)",
        "Bebê muito ativo ou, às vezes, quieto demais",
        "Contrações esporádicas e irregulares (Braxton Hicks)",
        "Cansaço extremo",
    ];

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full transform transition-all duration-500 animate-fade-in">
            <ProgressBar currentStep={2} totalSteps={3} />
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">E fisicamente, o que você tem percebido?</h1>
            <p className="text-slate-600 mb-8 text-center">Seu corpo dá sinais importantes. Vamos decifrá-los juntas.</p>
            
            <h2 className="text-lg font-medium text-slate-700 mb-4 text-center">Quais sensações você tem tido com mais frequência? <span className="font-normal text-sm">(Marque todas que se aplicam)</span></h2>

            <div className="space-y-4">
                {options.map((option, index) => (
                    <label
                        key={index}
                        className={`w-full text-left p-4 border rounded-lg flex items-center gap-4 transition duration-200 cursor-pointer ${
                            state.physicalAnswers.includes(option)
                            ? 'bg-pink-500 text-white border-pink-500'
                            : 'bg-white hover:bg-pink-100 border-pink-200'
                        }`}
                    >
                        <div className="w-6 h-6 border-2 rounded flex-shrink-0 flex items-center justify-center transition-colors"
                             style={{borderColor: state.physicalAnswers.includes(option) ? 'white' : 'rgb(251 146 160)'}}>
                            {state.physicalAnswers.includes(option) && <CheckIcon />}
                        </div>
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={state.physicalAnswers.includes(option)}
                            onChange={() => togglePhysicalAnswer(option)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
            <div className="mt-8 space-y-4">
                <button 
                    onClick={nextPage} 
                    disabled={state.physicalAnswers.length === 0}
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

export default PhysicalSensationsPage;