
export interface QuizState {
    currentPage: number;
    name: string;
    gestationalAge: string;
    anxietyAnswer: string;
    physicalAnswers: string[];
    preparationAnswer: string;
}

export interface QuizContextType {
    state: QuizState;
    setName: (name: string) => void;
    setGestationalAge: (age: string) => void;
    setAnxietyAnswer: (answer: string) => void;
    togglePhysicalAnswer: (answer: string) => void;
    setPreparationAnswer: (answer: string) => void;
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (page: number) => void;
}