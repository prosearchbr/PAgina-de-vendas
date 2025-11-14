
import React from 'react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const percentage = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full mb-8">
            <p className="text-center text-sm text-pink-500 mb-2">Pergunta {currentStep} de {totalSteps}</p>
            <div className="w-full bg-pink-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
