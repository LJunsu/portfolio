import React, { createContext, useContext, useRef } from "react"

type SectionRefs = {
    aboutMe: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
    study: React.RefObject<HTMLDivElement>;
    project: React.RefObject<HTMLDivElement>; 
}

const SectionContext = createContext<{
    sectionRefs: SectionRefs;
    onMoveBox: (section: keyof SectionRefs) => void;
} | null>(null);

export const SectionProvider = ({children}: {children: React.ReactNode}) => {
    const sectionRefs = {
        aboutMe: useRef<HTMLDivElement>(null!),
        skill: useRef<HTMLDivElement>(null!),
        study: useRef<HTMLDivElement>(null!),
        project: useRef<HTMLDivElement>(null!)
    };

    const onMoveBox = (section: keyof SectionRefs) => {
        sectionRefs[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <SectionContext.Provider value={{sectionRefs, onMoveBox}}>
            {children}
        </SectionContext.Provider>
    );
}

export const useSection = () => {
    const context = useContext(SectionContext);
    if(!context) throw new Error("useSection must be used within a SectionProvider");
    return context;
}