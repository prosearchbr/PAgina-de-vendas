
import React from 'react';
import { useQuiz } from '../context/QuizContext';

const ConfirmationPage: React.FC = () => {
    const { state } = useQuiz();

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full text-center transform transition-all duration-500 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-fuchsia-800 mb-2">Seu Protocolo AtivaParto está pronto, {state.name}! 🎉</h1>
            <h2 className="text-lg text-pink-500 font-medium mb-6">Sua jornada para um parto mais rápido e sereno começa agora!</h2>

            <div className="text-left bg-pink-50 border border-pink-200 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl text-fuchsia-700 mb-4">Suas Informações:</h3>
                <ul className="space-y-3 text-slate-700">
                    <li><strong>Nome:</strong> {state.name}</li>
                    <li><strong>Idade Gestacional:</strong> {state.gestationalAge}</li>
                    <li><strong>Perfil Identificado:</strong> Ansiedade na reta final, com sensação de cansaço e desejo por ações práticas.</li>
                </ul>
            </div>
            
            <p className="text-slate-600 mb-6">Com base nas suas respostas, o protocolo foi ajustado para focar nos seus maiores desafios: <strong>ansiedade</strong>, <strong>cansaço físico</strong> e a necessidade de um <strong>plano de ação claro</strong>.</p>
            
            <p className="font-bold text-lg mb-4">Clique no botão abaixo para ter acesso completo e imediato.</p>

            <button
                onClick={() => alert("Iniciando o download do app com o protocolo...")}
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 text-lg"
            >
                Baixar o App com o Protocolo Completo
            </button>

            <p className="text-sm text-slate-500 mt-6">Tem dúvidas? Fale diretamente conosco no WhatsApp ou Instagram.</p>
        </div>
    );
};

export default ConfirmationPage;