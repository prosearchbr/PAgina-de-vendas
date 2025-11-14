
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { QuizState, QuizContextType } from '../types';

const defaultState: QuizState = {
    currentPage: 1,
    name: '',
    gestationalAge: '',
    anxietyAnswer: '',
    physicalAnswers: [],
    preparationAnswer: '',
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<QuizState>(defaultState);

    const nextPage = () => setState(prevState => ({ ...prevState, currentPage: prevState.currentPage + 1 }));
    const prevPage = () => setState(prevState => ({ ...prevState, currentPage: Math.max(1, prevState.currentPage - 1) }));
    const goToPage = (page: number) => setState(prevState => ({ ...prevState, currentPage: page }));
    const setName = (name: string) => setState(prevState => ({ ...prevState, name }));
    const setGestationalAge = (age: string) => setState(prevState => ({ ...prevState, gestationalAge: age }));
    const setAnxietyAnswer = (answer: string) => setState(prevState => ({ ...prevState, anxietyAnswer: answer }));
    const setPreparationAnswer = (answer: string) => setState(prevState => ({ ...prevState, preparationAnswer: answer }));

    const togglePhysicalAnswer = (answer: string) => {
        setState(prevState => {
            const newAnswers = prevState.physicalAnswers.includes(answer)
                ? prevState.physicalAnswers.filter(a => a !== answer)
                : [...prevState.physicalAnswers, answer];
            return { ...prevState, physicalAnswers: newAnswers };
        });
    };

    return (
        <QuizContext.Provider value={{ state, setName, setGestationalAge, setAnxietyAnswer, togglePhysicalAnswer, setPreparationAnswer, nextPage, prevPage, goToPage }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = (): QuizContextType => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
};