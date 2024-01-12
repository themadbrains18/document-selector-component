import React, { createContext, useContext, ReactNode, useState } from 'react';

interface DocContextProps {
  selectedDocuments: string[];
  setSelectedDocuments: React.Dispatch<React.SetStateAction<string[]>>;
}

const DocContext = createContext<DocContextProps | undefined>(undefined);

export const DocContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  return (
    <DocContext.Provider value={{ selectedDocuments, setSelectedDocuments }}>
      {children}
    </DocContext.Provider>
  );
};

export const useDocContext = () => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error('useDocContext must be used within a DocContextProvider');
  }
  return context;
};
