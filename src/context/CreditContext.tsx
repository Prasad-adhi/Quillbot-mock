import { createContext, useContext, useState } from 'react';

type CreditContextType = {
  credits: number;
  totalCredits: number;
  useCredits: () => void;
  addCredits: () => void;
};

const CreditContext = createContext<CreditContextType | undefined>(undefined);

export function CreditProvider({ children }: { children: React.ReactNode }) {
  const [credits, setCredits] = useState(0);
  const [totalCredits, setTotalCredits] = useState(100);

  const useCredits = () => {
    if (credits + 20 <= totalCredits) {
      setCredits(credits + 20);
    }
  };

  const addCredits = () => {
    setTotalCredits(totalCredits+1000);
    //setCredits(0);
  };

  return (
    <CreditContext.Provider value={{ credits, totalCredits, useCredits, addCredits }}>
      {children}
    </CreditContext.Provider>
  );
}

export function useCredits() {
  const context = useContext(CreditContext);
  if (context === undefined) {
    throw new Error('useCredits must be used within a CreditProvider');
  }
  return context;
}