
import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';

const PersonalInfoPage: React.FC = () => {
    const { state, setName, setGestationalAge, nextPage, prevPage } = useQuiz();
    const [localName, setLocalName] = useState(state.name);
    const [error, setError] = useState('');

    const gestationalAges = ["37 semanas", "38 semanas", "39 semanas", "40 semanas", "41 semanas ou mais"];

    const handleContinue = () => {
        if (!localName.trim() || !state.gestationalAge) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        setName(localName);
        setError('');
        nextPage();
    };

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-lg w-full transform transition-all duration-500 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">Primeiro, vamos nos conhecer melhor!</h1>
            <p className="text-slate-600 mb-8 text-center">É um prazer te receber aqui! Para que nossa análise seja personalizada só para você, preencha os dados abaixo.</p>
            
            <div className="mb-6">
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Qual é o seu nome completo?</label>
                <input
                    type="text"
                    id="name"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                    placeholder="Ex.: Maria da Silva"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
                />
            </div>

            <div className="mb-6">
                <label className="block text-slate-700 font-medium mb-2">Qual é a sua idade gestacional?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gestationalAges.map(age => (
                        <button
                            key={age}
                            onClick={() => setGestationalAge(age)}
                            className={`p-3 border rounded-lg text-sm transition ${
                                state.gestationalAge === age 
                                ? 'bg-pink-500 text-white border-pink-500' 
                                : 'bg-white hover:bg-pink-100 border-pink-200'
                            }`}
                        >
                            {age}
                        </button>
                    ))}
                </div>
            </div>
            
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

            <div className="mt-6 space-y-4">
                <button
                    onClick={handleContinue}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                >
                    Continuar
                </button>
                <button onClick={prevPage} className="w-full text-slate-500 hover:text-slate-700 py-2 rounded-full transition hover:bg-slate-100">
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default PersonalInfoPage;