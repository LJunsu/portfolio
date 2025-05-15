import { useSection } from "@/lib/SectionContext";
import AboutMe from "./about-me";
import Skill from "./skill";
import Study from "./study";
import Project from "./project";

export default function Section() {
    const {sectionRefs} = useSection();

    return (
        <main className="min-h-screen w-full py-20 flex justify-center bg-slate-200">

            <div className="w-4/5 flex flex-col items-center justify-center gap-10">
                <article 
                    ref={sectionRefs.aboutMe} 
                    className="w-full shadow-lg rounded-2xl bg-white"
                >
                    <AboutMe />
                </article>

                <article 
                    ref={sectionRefs.skill} 
                    className="w-full shadow-lg rounded-2xl bg-white"
                >
                    <Skill />
                </article>

                <article
                    ref={sectionRefs.study} 
                    className="relative w-screen h-screen perspective-distant overflow-hidden shadow-lg bg-white"
                >
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 flex">
                        <p className="text-3xl font-bold text-center">Study</p>
                    </div>

                    <Study />
                </article>

                <article 
                    ref={sectionRefs.project} 
                    className="w-full shadow-lg rounded-2xl bg-white"
                >
                    <Project />
                </article>
            </div>
        </main>
    );
}