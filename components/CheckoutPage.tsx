import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { CheckIcon } from './icons/Icons';

const CheckoutPage: React.FC = () => {
    const { nextPage } = useQuiz();
    
    const handlePaymentRedirect = () => {
        // In a real app, this would redirect to a payment gateway URL.
        // We simulate success and move to the confirmation page.
        alert("Você será redirecionado para um ambiente de pagamento seguro.");
        nextPage();
    };

    const benefits = [
        "Protocolo Exclusivo Passo a Passo: Sequência de exercícios específicos para estimular o trabalho de parto.",
        "Guia de Alimentação Poderosa: Os alimentos-chave para dar energia e preparar seu útero.",
        "Técnicas de Relaxamento e Respiração: Para controlar a ansiedade e manejar a dor desde os primeiros sinais.",
        "Lista de Verificação ('Checklist'): Para você não esquecer de nada quando o grande dia chegar.",
        "Acesso Imediato e Vitalício: Compre agora e acesse para sempre, podendo revisitar sempre que quiser."
    ];

    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full transform transition-all duration-500 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-fuchsia-800 mb-2 text-center">Garanta Agora o Protocolo AtivaParto</h1>
            <p className="text-slate-600 mb-6 text-center">Invista no seu parto natural e seguro por apenas <span className="font-bold text-pink-500">R$ 47,90</span></p>

            <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h2 className="font-bold text-lg mb-4 text-fuchsia-700">O que você vai receber:</h2>
                <ul className="space-y-3 text-slate-600">
                    {benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-green-500 w-5 h-5 flex-shrink-0 mt-1"><CheckIcon strokeWidth={3} /></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="text-center mt-8">
                 <button
                    onClick={handlePaymentRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    Ir para o Pagamento Seguro
                </button>
                <p className="text-xs text-slate-400 mt-4">Garantia de 7 dias para sua total satisfação.</p>
            </div>
        </div>
    );
};

export default CheckoutPage;
